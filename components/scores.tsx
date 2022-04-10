import NumberInput from './number-input'
import NumberDisplay from './number-display'
import styles from './scores.module.css'

const Scores = () => {

  return (
    <>
    <div className={styles.title}>Scores and Active Player</div>  
    <div className={styles.container}>
      <NumberDisplay display="Player 1" value={14} inputValue={24} />
      <NumberInput />
      <NumberDisplay display="Player 2" value={33} inputValue={24} />
    </div>
    </>
  )
}

export default Scores