import Title from './title'
import styles from './next-ball.module.css'

const NextBall = () => {
  return (
    <>
      <Title text='Next Ball' />
      <div className={styles.container}>
        <div>Red or Color</div>
        <div>Color after Red</div>
        <div>Free Ball</div>
      </div>
    </>
  )
}

export default NextBall
