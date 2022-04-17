import Title from './title'
import styles from './next-ball.module.css'
import { useContext } from 'react'
import { AppContext } from '../context/app-context'
import { setNextBall } from '../context/game'

const NextBall = () => {

  const { state: { game }, dispatch } = useContext(AppContext)
  const { nextIsColorAfterRed, nextIsFreeBall } = game

  return (
    <>
      <Title text='Next Ball' />
      <div className={styles.container}>
        <div
          className={(!nextIsColorAfterRed && !nextIsFreeBall) ? styles.active : ''}
          onClick={() => { dispatch(setNextBall('redOrLowestColor')) }}
        >
          Red or Color
        </div>

        <div
          className={nextIsColorAfterRed ? styles.active : ''}
          onClick={() => { dispatch(setNextBall('colorAfterRed')) }}
        >
          Color after Red
        </div>

        <div
          className={nextIsFreeBall ? styles.active : ''}
          onClick={() => { dispatch(setNextBall('freeBall')) }}
        >
          Free Ball
        </div>
      </div>
    </>
  )
}

export default NextBall
