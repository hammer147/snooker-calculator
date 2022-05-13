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
          content="Given the score of each player, the remaining reds and remaining colours, 
        as well as the next ball (a red, a colour after a red or a free ball), 
        this app will calculate what each player needs to win the frame by forcing the opponent to need a snooker. 
        The calculated results include how many snookers are needed, as well as the amount of reds and blacks 
        and how many of the remaining colours are needed. "
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
