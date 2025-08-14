import { useState } from "react"
import { languages } from "./languages"
import { clsx } from "clsx";
import { getFarewellText, getGoodJobText, getRandomWord } from "./utils";

export default function Assembly() {
  /* --- values section --- */

  // State values
  const [currentWord, setCurrentWord] = useState("");
  const [guessed, setGuessed] = useState([]);

  // Derived values
  const wrongGuessCount = guessed.filter((letter) => 
    !currentWord.includes(letter)
  ).length;

  const deadLanguage = wrongGuessCount > 0 ?
  languages[wrongGuessCount - 1].name:
  null;
  
  const isGameLost = wrongGuessCount >= languages.length - 1;
  
  const isGameWon = 
    currentWord.split("").every(letter => guessed.includes(letter));
  
  const isGameOver = isGameWon || isGameLost;

  const lastGuessedLetter = guessed.at(-1);

  /* --- functions section --- */

  // Wrong if last guessed letter is not in currentWord
  function guessStatus() {
    if (guessed.length === 0) {
      return "none";
    } else if(!isGameOver) {
      return !currentWord.includes(lastGuessedLetter) ? "wrong" : "right";
    }

    return "none";
  }

  // Generates the language divs
  function makeLanguageBlocks() {
    return languages.map((lang, index)=> 
      (<div 
        key={index} 
        style={{
          backgroundColor:`${lang.backgroundColor}`,
          color: `${lang.color}`
        }}
        className={
          clsx(
            "language",
            {lost: index < wrongGuessCount}
          )
        }
        >
        {lang.name}
      </div>
      )
    )
  }
  
    // Make a span element for each letter
  function inputWord() {
    // if new game, make a new word for guessing
    if (guessed.length === 0 && !currentWord) {
      return setCurrentWord(getRandomWord());
    }
    console.log(currentWord)
    return [...currentWord]
    .map(
      (letter, index) =>
        (
        <span
          className="input-letter"
          key={index}
        >
          {guessed.includes(letter) && letter.toUpperCase()}
        </span>
        )
      
    )
  }

  // Add guessed letter to state
  function addGuess(letter) {
    setGuessed(prevGuessed => 
      prevGuessed.includes(letter) ? 
        prevGuessed :
        [...prevGuessed, letter] 
    );
  }

  // Generates a div for letters A to Z
  function keyboardKeys() {
    const elemArr = [];
    for (let code = 65; code < 91; code++) {
      let letter = String.fromCharCode(code);
      const isCorrect = currentWord.includes(letter);
      const isGuessed = guessed.includes(letter);
      elemArr.push(
        <button
          key={code}
          disabled={isGameOver}
          aria-disabled={guessed.includes(letter)}
          aria-label={`Letter ${letter}`}
          className={
            clsx(
              "keyboard-letter", 
              isGuessed 
                ? (isCorrect ? "bg-color-green" : "bg-color-red")
                : null
            )
          }
          onClick={() => addGuess(letter)}
        >
          {letter}
        </button>
      )
    }

    return elemArr;
  }

  const gameStatusClass = clsx(
    "game-info__result-text", 
    {
      win: isGameWon,
      lose: isGameLost,
      wrong: guessStatus() === "wrong",
      right: guessStatus() === "right"
    }
  )

  // Return game status message
  function renderGameStatus() {
    if (!isGameOver) {
      if (guessStatus() === "wrong") {
        return (
          <>
            <h2>{getFarewellText(deadLanguage)}</h2>
          </>
        )
      } else if (guessStatus() === "right") {
        return (
          <>
            <h2>{getGoodJobText()}</h2>
          </>
        )
      }

      return (
        <h2>Guess your first letter! (carefully)</h2>
      )
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>        
        </>
      )
    } else {
      return (
        <>
          <h2>Game Over!</h2>
          <p>Assembly has taken control of the programming world... 💀</p>        
        </>
      )
    }
  }

  return(
    <>
      <main>
        <section className="game-info">
          <div className="game-info__rules">
            <h1 className="game-info__header">Assembly: Rescue Programming</h1>
            <p className="game-info__text">
              Guess the hidden magical word in 8 tries or less to save the programming world from Assembly’s takeover!            </p>
          </div>
          <div className="game-info__result">
            <div 
              className={gameStatusClass} 
              role="status"
            >
              {renderGameStatus()}
            </div>
          </div>
        </section>

        <section className="game-screen">
          <div className="game-screen__languages">
            {makeLanguageBlocks()}
          </div>
          <div className="game-screen__input">
            {inputWord()}
          </div>

          {/* Combined visually-hidden aria-live region for status updates */}
          <div 
            className="sr-only"
            role="status"
          >
            <p>
              {currentWord.includes(lastGuessedLetter) ? 
                `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                `Sorry, the letter ${lastGuessedLetter} is not in the word.`
              }
            </p>
            <p>Current word: {currentWord.split("").map(letter => 
                guessed.includes(letter) ? letter + "." : "blank.")
                .join(" ")}</p>
          </div>
          <div className="game-screen__keys">
            {keyboardKeys()}
          </div>
        </section>
          {isGameOver && <button
            className="start-btn"
          >
            New Game
          </button>}
      </main>
    </>
  )
}