import Title from './title'
import styles from './next-ball.module.css'
import { useContext } from 'react'
import { AppContext } from '../context/app-context'
import { setNextBall } from '../context/game'

const NextBall = () => {

  const { state: { game }, dispatch } = useContext(AppContext)
  const { nextIsColorAfterRed, nextIsFreeBall, numReds, numColors } = game

  let redOrColor = ''

  if (numReds > 0) {
    redOrColor = 'Red'
  } else {
    switch (numColors) {
      case 1:
        redOrColor = 'Black'
        break
      case 2:
        redOrColor = 'Pink'
        break
      case 3:
        redOrColor = 'Blue'
        break
      case 4:
        redOrColor = 'Brown'
        break
      case 5:
        redOrColor = 'Green'
        break
      case 6:
        redOrColor = 'Yellow'
        break
      default:
        redOrColor = 'Red or Color'
    }
  }

  return (
    <div className={styles.nextBall}>
      <Title text='Next Ball' />
      <div className={styles.container}>
        {!(numColors === 0) && (
          <div
            className={`${styles.option} ${(!nextIsColorAfterRed && !nextIsFreeBall) ? styles.active : ''}`}
            onClick={() => { dispatch(setNextBall('redOrLowestColor')) }}
          >
            {redOrColor}
          </div>
        )}
        {!(numColors < 6) && (
          <div
            className={`${styles.option} ${nextIsColorAfterRed ? styles.active : ''}`}
            onClick={() => { dispatch(setNextBall('colorAfterRed')) }}
          >
            Colour after Red
          </div>
        )}
        {!(numColors < 2) && (
          <div
            className={`${styles.option} ${nextIsFreeBall ? styles.active : ''}`}
            onClick={() => { dispatch(setNextBall('freeBall')) }}
          >
            Free Ball
          </div>
        )}

      </div>
    </div>
  )
}

export default NextBall
