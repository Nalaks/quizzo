import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuizItemsState } from '../types/types'
import type { RootState } from './store'

const initialState: QuizItemsState = {
  value: [],
}

export const quizItemsSlice = createSlice({
  name: 'quizItems',
  initialState,
  reducers: {
    getQuestions: (state, action: PayloadAction<any>) => {
      state.value = [...state.value, action.payload]
    },
  },
})

export const { getQuestions } = quizItemsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectQuizItems = (state: RootState) => state.quizItems.value

export default quizItemsSlice.reducer
