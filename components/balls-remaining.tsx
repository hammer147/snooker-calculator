import NumberDisplay from './number-display'
import NumberInput from './number-input'
import styles from './balls-remaining.module.css'

const BallsRemaining = () => {
  return (
    <>
    <div className={styles.title}>Balls Remaining</div>  
    <div className={styles.container}>
      <NumberDisplay display="Reds" value={10} inputValue={1} />
      <NumberInput />
      <NumberDisplay display="Colors" value={6} inputValue={1} />
    </div>
    </>
  )
}
export default BallsRemaining
