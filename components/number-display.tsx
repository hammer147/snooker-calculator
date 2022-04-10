import styles from './number-display.module.css'

type Props = {
  display: string
  value: number
  inputValue: number
}

const NumberDisplay = ({ display, value, inputValue }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.display}>{display}</div>
      <div className={styles.value}>{value}</div>
      <button>- {inputValue}</button>
      <button>+ {inputValue}</button>
      <button>{inputValue}</button>
    </div>
  )
}

export default NumberDisplay
