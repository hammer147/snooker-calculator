import { initialGameState, GameAction, gameReducer, GameState } from './game'

export type RootState = {
  game: GameState // ReturnType<typeof gameReducer>
}

export const initialRootState: RootState = {
  game: initialGameState
}

// union type for the actions
export type Action = GameAction // | AnotherFeatureAction | YetAnotherFeatureAction | etc

// combining the reducers
export const rootReducer = (state: RootState, action: Action): RootState => ({
  ...state,
  game: gameReducer(state.game, action as GameAction)
})
