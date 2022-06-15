import { configureStore } from '@reduxjs/toolkit'
import quizItemsReducer from './quizItemsSlice'

const store = configureStore({
  reducer: {
    quizItems: quizItemsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
