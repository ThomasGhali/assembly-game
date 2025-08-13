import { useState } from "react"
import { languages } from "./languages"
import { clsx } from "clsx";

export default function Assembly() {
  // State values
  const [currentWord, setCurrentWord] = useState("TRANQUIL");
  const [guessed, setGuessed] = useState([]);

  // Derived values
  const wrongGuessCount = guessed.filter((letter) => {
    if (!currentWord.includes(letter)) return true;
  }).length;

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

  return(
    <>
      <main>
        <section className="game-info">
          <div className="game-info__rules">
            <h1 className="game-info__header">Assembly: Rescue Programming</h1>
            <p className="game-info__text">
              Guess the word in under 8 attempts to keep the programming world safe from Assembly!
            </p>
          </div>
          <div className="game-info__result">
            <div className="game-info__result-text">
              <h2>You win!</h2>
              <p>Well done! 🎉</p>
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
          <div className="game-screen__keys">
            {keyboardKeys()}
          </div>
        </section>
      </main>
    </>
  )
}