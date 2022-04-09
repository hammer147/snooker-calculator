import { ReactNode, useEffect, useReducer } from 'react'
import { AppContext } from './app-context'
import { initialRootState, rootReducer } from './root-reducer'

type Props = {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(rootReducer, initialRootState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
