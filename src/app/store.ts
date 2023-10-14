import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "src/features/counter/counterSlice"
import filmsReducer from 'src/features/films/filmsSlice';
import characterReducer from 'src/features/characters/charactersSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    films:filmsReducer,
    characters:characterReducer,
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
