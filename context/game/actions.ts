import { ActionType } from './action-types'

// typing actions

type SetScoreAction = {
  type: ActionType.setScore
  payload: {
    player: 'scorePlayerOne' | 'scorePlayerTwo'
    score: number
  }
}

type AdjustScoreAction = {
  type: ActionType.adjustScore
  payload: {
    player: 'scorePlayerOne' | 'scorePlayerTwo'
    valueToAdd: number
  }
}

type SetActivePlayerAction = {
  type: ActionType.setActivePlayer
  payload: {
    player: 1 | 2
  }
}

type SetRemainingBallsAction = {
  type: ActionType.setRemainingBalls
  payload: {
    redsOrColors: 'numReds' | 'numColors'
    number: number
  }
}

type AdjustRemainingBallsAction = {
  type: ActionType.adjustRemainingBalls
  payload: {
    redsOrColors: 'numReds' | 'numColors'
    valueToAdd: number
  }
}

type SetNextBallAction = {
  type: ActionType.setNextBall
  payload: {
    nextBall: 'redOrLowestColor' | 'colorAfterRed' | 'freeBall'
  }
}

// discriminated union (type guard via switch in reducer)

export type GameAction =
  | SetScoreAction
  | AdjustScoreAction
  | SetActivePlayerAction
  | SetRemainingBallsAction
  | AdjustRemainingBallsAction
  | SetNextBallAction

// action creators

export const setPlayerScore = (player: 'scorePlayerOne' | 'scorePlayerTwo', score: number): SetScoreAction => ({
  type: ActionType.setScore,
  payload: {
    player,
    score
  }
})

export const adjustPlayerScore = (player: 'scorePlayerOne' | 'scorePlayerTwo', valueToAdd: number): AdjustScoreAction => ({
  type: ActionType.adjustScore,
  payload: {
    player,
    valueToAdd
  }
})

export const setActivePlayer = (player: 1 | 2): SetActivePlayerAction => ({
  type: ActionType.setActivePlayer,
  payload: {
    player
  }
})

export const setRemainingBalls = (redsOrColors: 'numReds' | 'numColors', number: number): SetRemainingBallsAction => ({
  type: ActionType.setRemainingBalls,
  payload: {
    redsOrColors,
    number
  }
})

export const adjustRemainingBalls = (redsOrColors: 'numReds' | 'numColors', valueToAdd: number): AdjustRemainingBallsAction => ({
  type: ActionType.adjustRemainingBalls,
  payload: {
    redsOrColors,
    valueToAdd
  }
})

export const setNextBall = (nextBall: 'redOrLowestColor' | 'colorAfterRed' | 'freeBall'): SetNextBallAction => ({
  type: ActionType.setNextBall,
  payload: {
    nextBall
  }
})
