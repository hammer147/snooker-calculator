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
        [action.payload.player]: Math.min(999, Math.max(0, action.payload.score))
      }

    case ActionType.adjustScore:
      return {
        ...state,
        [action.payload.player]: Math.min(999, Math.max(0, state[action.payload.player] + action.payload.valueToAdd))
      }

    case ActionType.setActivePlayer:
      return {
        ...state,
        isActivePlayerOne: action.payload.player === 1
      }

    case ActionType.setRemainingBalls:
      if (action.payload.redsOrColors === 'numReds'){
        return {
          ...state,
          numReds: Math.min(15, Math.max(0, action.payload.number)),
          numColors: action.payload.number > 0 ? 6 : state.numColors
        }
      } else { // if (action.payload.redsOrColors === 'numColors')
        return {
          ...state,
          numReds: action.payload.number < 6 ? 0 : state.numReds,
          numColors: Math.min(6, Math.max(0, action.payload.number)),
        }
      }

    case ActionType.adjustRemainingBalls:
      if (action.payload.redsOrColors === 'numReds') {
        return {
          ...state,
          numReds: Math.min(15,Math.max(0,state.numReds + action.payload.valueToAdd)),
          numColors: Math.min(15,Math.max(0,state.numReds + action.payload.valueToAdd)) > 0 ? 6 : state.numColors
        }
      } else { // if (action.payload.redsOrColors === 'numColors')
        return {
          ...state,
          numReds: Math.min(6, Math.max(0, state.numColors + action.payload.valueToAdd)) < 6 ? 0 : state.numReds,
          numColors: Math.min(6, Math.max(0, state.numColors + action.payload.valueToAdd)),
        }
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
