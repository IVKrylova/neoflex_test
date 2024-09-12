import {
  configureStore,
  ThunkAction,
  ActionCreator,
  Action,
  ThunkDispatch,
} from '@reduxjs/toolkit'

import { rootReducer } from './slices'

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, undefined, Action<string>>
>
export type NextThunkDispatch = ThunkDispatch<RootState, void, Action<string>>

export const store = makeStore()
