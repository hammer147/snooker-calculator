import { ActionType } from './action-types'
import { GameAction } from './actions'

export type GameState = {
  scorePlayerOne: number
  scorePlayerTwo: number
  isActivePlayerOne: boolean
  numReds: number
  numColors: number
  nextIsFreeBall: boolean
  nextIsColorAfterRed: boolean
}

export const initialGameState: GameState = {
  scorePlayerOne: 0,
  scorePlayerTwo: 0,
  isActivePlayerOne: true,
  numReds: 15,
  numColors: 6,
  nextIsFreeBall: false,
  nextIsColorAfterRed: false
}

export const gameReducer = (state: GameState, action: GameAction): GameState => {

  switch (action.type) {

    case ActionType.setScore:
      return {
        ...state,
        [action.payload.player]: action.payload.score
      }

    case ActionType.adjustScore:
      return {
        ...state,
        [action.payload.player]: state[action.payload.player] + action.payload.valueToAdd
      }

    case ActionType.setActivePlayer:
      return {
        ...state,
        isActivePlayerOne: action.payload.player === 1
      }

    case ActionType.setRemainingBalls:
      return {
        ...state,
        [action.payload.redsOrColors]: action.payload.number
      }

    case ActionType.adjustRemainingBalls:
      return {
        ...state,
        [action.payload.redsOrColors]: state[action.payload.redsOrColors] + action.payload.valueToAdd
      }

    case ActionType.setNextBall:
      if (action.payload.nextBall === 'colorAfterRed') {
        return {
          ...state,
          nextIsColorAfterRed: true,
          nextIsFreeBall: false
        }
      } else if (action.payload.nextBall === 'freeBall') {
        return {
          ...state,
          nextIsColorAfterRed: false,
          nextIsFreeBall: true
        }
      } else {
        return {
          ...state,
          nextIsColorAfterRed: false,
          nextIsFreeBall: false
        }
      }

    default:
      return state
  }
}
