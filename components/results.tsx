import { useContext } from 'react'
import { AppContext } from '../context/app-context'
import { whatIsNeeded } from '../utils'
import Title from './title'
import styles from './results.module.css'

const Results = () => {
  const { state: { game }, dispatch } = useContext(AppContext)

  const { scorePlayerOne, scorePlayerTwo, isActivePlayerOne,
    numReds, numColors, nextIsFreeBall, nextIsColorAfterRed } = game

  // invalid if numColors === 0 && scorePlayerOne === scorePlayerTwo

  if ((numColors === 0 && scorePlayerOne !== scorePlayerTwo) || (numColors === 1 && Math.abs(scorePlayerOne - scorePlayerTwo) > 7)) {
    // game over 
    return (
      <div className={styles.results}>
        <Title text='Results' background='green' />
        <div className={styles.container}>

          <div className={styles.card}>
            <div className={styles.player}>Player 1</div>
            <div>{scorePlayerOne > scorePlayerTwo ? 'Won' : 'Lost'}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.player}>Player 2</div>
            <div>{scorePlayerOne > scorePlayerTwo ? 'Lost' : 'Won'}</div>
          </div>

        </div>
      </div>
    )

  } else if (numColors === 1 && Math.abs(scorePlayerOne - scorePlayerTwo) === 7){
    // possible respot black
    return (
      <div className={styles.results}>
        <Title text='Results' background='green' />
        <div className={styles.container}>

          <div className={styles.card}>
            <div className={styles.player}>Player 1</div>
            <div>{scorePlayerOne > scorePlayerTwo ? 'Ahead 7' : 'Behind 7'}</div>
            <div>Available 7</div>
            <div>{scorePlayerOne > scorePlayerTwo ? `To win ${scorePlayerOne + 7} - ${scorePlayerTwo} (${scorePlayerOne + 7 - scorePlayerTwo})` : `To win ${scorePlayerOne + 14} - ${scorePlayerTwo} (${scorePlayerOne + 14 - scorePlayerTwo})`}</div>
            <div>{scorePlayerOne > scorePlayerTwo ? '1 Color' : '1 Color + Respotted Black'}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.player}>Player 2</div>
            <div>{scorePlayerTwo > scorePlayerOne ? 'Ahead 7' : 'Behind 7'}</div>
            <div>Available 7</div>
            <div>{scorePlayerTwo > scorePlayerOne ? `To win ${scorePlayerTwo + 7} - ${scorePlayerOne} (${scorePlayerTwo + 7 - scorePlayerOne})` : `To win ${scorePlayerTwo + 14} - ${scorePlayerOne} (${scorePlayerTwo + 14 - scorePlayerOne})`}</div>
            <div>{scorePlayerTwo > scorePlayerOne ? '1 Color' : '1 Color + Respotted Black'}</div>
          </div>

        </div>
      </div>
    )
  } else {

    const playerOneToWin = whatIsNeeded(scorePlayerOne, scorePlayerTwo, numReds, numColors, isActivePlayerOne, nextIsFreeBall, nextIsColorAfterRed)
    const playerTwoToWin = whatIsNeeded(scorePlayerTwo, scorePlayerOne, numReds, numColors, !isActivePlayerOne, nextIsFreeBall, nextIsColorAfterRed)

    return (
      <div className={styles.results}>
        <Title text='Results' background='green' />
        <div className={styles.container}>

          <div className={styles.card}>
            <div className={styles.player}>Player 1</div>
            <div>{`${playerOneToWin.aheadOrBehind} ${playerOneToWin.difference}`}</div>
            <div>{`Available ${playerOneToWin.available}`}</div>
            <div className={styles.needed}>{`To win ${playerOneToWin.winnerScore} - ${playerOneToWin.loserScore} (${playerOneToWin.winnerScore - playerOneToWin.loserScore})`}</div>
            <div className={styles.steps}>{playerOneToWin.steps}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.player}>Player 2</div>
            <div>{`${playerTwoToWin.aheadOrBehind} ${playerTwoToWin.difference}`}</div>
            <div>{`Available ${playerTwoToWin.available}`}</div>
            <div className={styles.needed}>{`To win ${playerTwoToWin.winnerScore} - ${playerTwoToWin.loserScore} (${playerTwoToWin.winnerScore - playerTwoToWin.loserScore})`}</div>
            <div className={styles.steps}>{playerTwoToWin.steps}</div>
          </div>

        </div>

        {/* <hr />
      <pre>{JSON.stringify(game, null, 2)}</pre>
      <hr /> */}
      </div>
    )
  }
}
export default Results
