import { useContext } from 'react'
import { AppContext } from '../context/app-context'
import { whatIsNeeded } from '../utils'
import Title from './title'
import styles from './results.module.css'

const Results = () => {
  const { state: { game }, dispatch } = useContext(AppContext)

  const { scorePlayerOne, scorePlayerTwo, isActivePlayerOne,
    numReds, numColors, nextIsFreeBall, nextIsColorAfterRed } = game

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
export default Results
