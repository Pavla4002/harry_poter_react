import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "src/features/counter/counterSlice"
import filmsReducer from 'src/features/films/filmsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    films:filmsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
