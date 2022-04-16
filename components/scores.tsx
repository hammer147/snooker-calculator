import NumberInput from './number-input'
import NumberDisplay from './number-display'
import styles from './scores.module.css'
import Title from './title'
import { useContext, useState } from 'react'
import { AppContext } from '../context/app-context'
import { adjustPlayerScore, setPlayerScore } from '../context/game'

const Scores = () => {

  const [number, setNumber] = useState(0) // number to modify score with

  const { state: { game }, dispatch } = useContext(AppContext)
  const { scorePlayerOne, scorePlayerTwo } = game

  return (
    <>
      <Title text='Scores and Active Player' />
      <div className={styles.container}>
        <NumberDisplay
          display="Player 1"
          value={scorePlayerOne}
          inputValue={number}
          subtract={(x: number) => dispatch(adjustPlayerScore('scorePlayerOne', -x))}
          add={(x: number) => dispatch(adjustPlayerScore('scorePlayerOne', x))}
          setTo={(x: number) => dispatch(setPlayerScore('scorePlayerOne', x))}
        />
        <NumberInput number={number} setNumber={setNumber} />
        <NumberDisplay
          display="Player 2"
          value={scorePlayerTwo}
          inputValue={number}
          subtract={(x: number) => dispatch(adjustPlayerScore('scorePlayerTwo', -x))}
          add={(x: number) => dispatch(adjustPlayerScore('scorePlayerTwo', x))}
          setTo={(x: number) => dispatch(setPlayerScore('scorePlayerTwo', x))}
        />
      </div>
    </>
  )
}

export default Scores
