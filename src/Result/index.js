import './index.css'

const Result = props => {
  const {gameScore, playAgain} = props

  const playAgainClicked = () => {
    playAgain()
  }

  return (
    <div className="result-container">
      <img
        alt="trophy"
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p className="result-text">YOUR SCORE</p>
      <p className="score-text">{gameScore}</p>
      <button className="paly-again" type="button" onClick={playAgainClicked}>
        <img
          className="reset-img"
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default Result
