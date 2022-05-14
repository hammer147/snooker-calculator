import type { NextPage } from 'next'
import Head from 'next/head'
import { Scores, BallsRemaining, NextBall, Results } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Snooker Calculator</title>
        <meta
          name="description"
          content="The app calculates what each player needs to win the frame by forcing the opponent to need a snooker. It shows how many snookers are needed, as well as the amount of reds and blacks and how many of the remaining colours. Free ball situations are also included."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Scores />
        <BallsRemaining />
        <NextBall />
        <Results />
      </div>
    </>
  )
}

export default Home
