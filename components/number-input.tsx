import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import styles from './number-input.module.css'

type Props = {
  number: number
  setNumber: Dispatch<SetStateAction<number>>
}

const NumberInput = ({ number, setNumber }: Props) => {

  const [lastInputTime, setLastInputTime] = useState(0)

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    let newNumber = ''
    if (Date.now() - lastInputTime > 2000) {
      newNumber = e.currentTarget.innerText
    } else {
      // limit number to 3 digits (4 digit input will display 0 because nemNumber remains an empty string)
      if (number < 100) newNumber = String(number) + e.currentTarget.innerText
    }
    setNumber(+newNumber)
    setLastInputTime(Date.now())
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
      <button className={styles.clear}></button>
    </div>
  )
}

export default NumberInput
