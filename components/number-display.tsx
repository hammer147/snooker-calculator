import styles from './number-display.module.css'

type Props = {
  displayText: string
  displayClasses?: string[]
  displayClickHandler?: () => void
  value: number
  inputValue: number
  subtract: (x: number) => void
  add: (x: number) => void
  setTo: (x: number) => void
}

const NumberDisplay = ({ displayText, displayClasses = [], displayClickHandler, value, inputValue, subtract, add, setTo }: Props) => {

  const classesFromProps = [...displayClasses].map(className => styles[className]).join(' ')

  return (
    <div className={styles.container}>
      <div onClick={displayClickHandler} className={`${styles.display} ${classesFromProps}`}>
        {displayText}
      </div>
      <div className={styles.value}>{value}</div>
      <button onClick={() => subtract(inputValue)}>- <span>{inputValue}</span></button>
      <button onClick={() => add(inputValue)}>+ <span>{inputValue}</span></button>
      <button onClick={() => setTo(inputValue)}><span>{inputValue}</span></button>
    </div>
  )
}

export default NumberDisplay
