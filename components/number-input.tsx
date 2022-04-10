import styles from './number-input.module.css'

const NumberInput = () => {
  return (
    <div className={styles.container}>
      <div className={styles.value}></div>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>0</button>
      <button className={styles.clear}>CLEAR</button>
    </div>
  )
}

export default NumberInput
