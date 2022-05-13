import NumberDisplay from './number-display'
import NumberInput from './number-input'
import styles from './balls-remaining.module.css'
import Title from './title'
import { useContext, useState } from 'react'
import { AppContext } from '../context/app-context'
import { adjustRemainingBalls, setRemainingBalls } from '../context/game'

const BallsRemaining = () => {

  const [number, setNumber] = useState(0) // number to modify remaining balls

  const { state: { game }, dispatch } = useContext(AppContext)
  const { numReds, numColors } = game

  return (
    <div className={styles.ballsRemaining}>
      <Title text='Balls Remaining' />
      <div className={styles.container}>
        <NumberDisplay
          displayText='Reds'
          value={numReds}
          inputValue={number}
          subtract={(x: number) => dispatch(adjustRemainingBalls('numReds', -x))}
          add={(x: number) => dispatch(adjustRemainingBalls('numReds', x))}
          setTo={(x: number) => dispatch(setRemainingBalls('numReds', x))}
        />
        <NumberInput number={number} setNumber={setNumber} />
        <NumberDisplay
          displayText='Colours'
          value={numColors}
          inputValue={number}
          subtract={(x: number) => dispatch(adjustRemainingBalls('numColors', -x))}
          add={(x: number) => dispatch(adjustRemainingBalls('numColors', x))}
          setTo={(x: number) => dispatch(setRemainingBalls('numColors', x))}
        />
      </div>
    </div>
  )
}

export default BallsRemaining
