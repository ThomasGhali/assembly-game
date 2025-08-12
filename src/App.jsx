import { languages } from "./languages"

export default function Assembly() {

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
            <div className="input-letter"></div>
            <div className="input-letter"></div>
            <div className="input-letter"></div>
            <div className="input-letter"></div>
            <div className="input-letter"></div>
            <div className="input-letter"></div>
            <div className="input-letter"></div>
            <div className="input-letter"></div>
          </div>
          <div className="game-screen__keys"></div>
        </section>
      </main>
    </>
  )
}