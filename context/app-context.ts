import { createContext, Dispatch } from 'react'
import { Action, initialRootState, RootState } from './root-reducer'

type AppContext = {
  state: RootState
  dispatch: Dispatch<Action>
}

export const AppContext = createContext<AppContext>({
  state: initialRootState,
  dispatch: () => null
})
