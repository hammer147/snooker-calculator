import styles from './title.module.css'

type Props = {
  text: string
  background?: string
}

const Title = ({ text, background = 'blue' }: Props) => {
  return (
    <div className={`${styles.title} ${styles[background]}`}>
      {text}
    </div>
  )
}

export default Title
