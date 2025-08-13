import { useState } from "react"
import { languages } from "./languages"

export default function Assembly() {
  
  const [currentWord, setCurrentWord] = useState("growth");
  const [guessed, setGuessed] = useState([])
  console.log(guessed);

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
          {letter.toUpperCase()}
        </span>
        )
      
    )
  }

  // Generates the language divs
  function makeLanguageBlocks() {
    return languages.map((lang, i)=> 
      (<div 
        key={i} 
        style={{
          backgroundColor:`${lang.backgroundColor}`,
          color: `${lang.color}`
        }}
        className="language"
      >
        {lang.name}
      </div>
      )
    )
  }

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
      elemArr.push(
        <button
          key={code}
          className="keyboard-letter"
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