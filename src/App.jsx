export default function Assembly() {
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

            </div>
          </div>
        </section>

        <section className="game-screen">
          <div className="game-screen__languages">
            <span className="language html">HTML</span>
            <span className="language css">CSS</span>
            <span className="language javascript">JavaScript</span>
            <span className="language react">React</span>
            <span className="language typescript">TypeScript</span>
            <span className="language nodejs">Node.js</span>
            <span className="language python">Python</span>
            <span className="language ruby">Ruby</span>
            <span className="language assembly">Assembly</span>
          </div>
          <div className="game-screen__input">
            <span className="input-letter"></span>
            <span className="input-letter"></span>
            <span className="input-letter"></span>
            <span className="input-letter"></span>
            <span className="input-letter"></span>
            <span className="input-letter"></span>
            <span className="input-letter"></span>
            <span className="input-letter"></span>
          </div>
          <div className="game-screen__keys"></div>
        </section>
      </main>
    </>
  )
}