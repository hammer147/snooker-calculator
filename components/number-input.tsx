import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import styles from './number-input.module.css'

type Props = {
  number: number
  setNumber: Dispatch<SetStateAction<number>>
}

const NumberInput = ({ number, setNumber }: Props) => {

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    const newNumber = String(number) + e.currentTarget.innerText
    setNumber(+newNumber)
  }

  return (
    <div className={styles.container}>
      <div className={styles.value}>{number}</div>
      <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
      <button onClick={handleClick}>0</button>
      <button onClick={() => setNumber(0)} className={styles.clear}>CLEAR</button>
    </div>
  )
}

export default NumberInput
