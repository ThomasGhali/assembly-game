import { useState } from "react"
import { languages } from "./languages"

export default function Assembly() {

  const [currentWord, setCurrentWord] = useState("growth");

  // map over the letters and make a span element containing each's value
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
          <div className="game-screen__keys"></div>
        </section>
      </main>
    </>
  )
}