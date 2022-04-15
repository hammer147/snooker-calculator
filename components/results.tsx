import { useContext } from 'react'
import { AppContext } from '../context/app-context'
import { whatIsNeeded } from '../utils'
import Title from './title'


const Results = () => {
  const { state: { game }, dispatch } = useContext(AppContext)

  const { scorePlayerOne, scorePlayerTwo, isActivePlayerOne,
    numReds, numColors, nextIsFreeBall, nextIsColorAfterRed } = game

  const playerOneToWin = whatIsNeeded(scorePlayerOne, scorePlayerTwo, numReds, numColors, isActivePlayerOne, nextIsFreeBall, nextIsColorAfterRed)
  const playerTwoToWin = whatIsNeeded(scorePlayerTwo, scorePlayerOne, numReds, numColors, !isActivePlayerOne, nextIsFreeBall, nextIsColorAfterRed)

  return (
    <>
    <Title text='Results' background='green' />
    <div>
      <div>Player One</div>
      <div>{playerOneToWin.steps}</div>
      <div>{`${playerOneToWin.winnerScore} - ${playerOneToWin.loserScore}`}</div>
      <div>{`${playerOneToWin.winnerScore - playerOneToWin.loserScore}`}</div>
      <hr />
      <div>Player Two</div>
      <div>{playerTwoToWin.steps}</div>
      <div>{`${playerTwoToWin.winnerScore} - ${playerTwoToWin.loserScore}`}</div>
      <div>{`${playerTwoToWin.winnerScore - playerTwoToWin.loserScore}`}</div>

      <hr />
      <pre>{JSON.stringify(game, null, 2)}</pre>
      <hr />
    </div>
    </>
  )
}
export default Results
