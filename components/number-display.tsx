import styles from './number-display.module.css'

type Props = {
  display: string
  value: number
  inputValue: number
  subtract: (x: number) => void
  add: (x: number) => void
  setTo: (x: number) => void
}

const NumberDisplay = ({ display, value, inputValue, subtract, add, setTo }: Props) => {

  return (
    <div className={styles.container}>
      <div className={styles.display}>{display}</div>
      <div className={styles.value}>{value}</div>
      <button onClick={() => subtract(inputValue)}>- {inputValue}</button>
      <button onClick={() => add(inputValue)}>+ {inputValue}</button>
      <button onClick={() => setTo(inputValue)}>{inputValue}</button>
    </div>
  )
}

export default NumberDisplay
