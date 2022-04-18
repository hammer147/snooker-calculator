import Title from './title'
import styles from './next-ball.module.css'
import { useContext } from 'react'
import { AppContext } from '../context/app-context'
import { setNextBall } from '../context/game'

const NextBall = () => {

  const { state: { game }, dispatch } = useContext(AppContext)
  const { nextIsColorAfterRed, nextIsFreeBall } = game

  return (
    <div className={styles.nextBall}>
      <Title text='Next Ball' />
      <div className={styles.container}>
        <div
          className={`${styles.option} ${(!nextIsColorAfterRed && !nextIsFreeBall) ? styles.active : ''}`}
          onClick={() => { dispatch(setNextBall('redOrLowestColor')) }}
        >
          Red or Color
        </div>

        <div
          className={`${styles.option} ${nextIsColorAfterRed ? styles.active : ''}`}
          onClick={() => { dispatch(setNextBall('colorAfterRed')) }}
        >
          Color after Red
        </div>

        <div
          className={`${styles.option} ${nextIsFreeBall ? styles.active : ''}`}
          onClick={() => { dispatch(setNextBall('freeBall')) }}
        >
          Free Ball
        </div>
      </div>
    </div>
  )
}

export default NextBall
