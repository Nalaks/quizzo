import { QuizCategory, QuizDifficulty } from '../types/types'

export const shuffle = (array: string[]) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const quizCategory = Object.keys(QuizCategory).map((name) => {
  return {
    name,
    value: QuizCategory[name as keyof typeof QuizCategory],
  }
})

export const quizDifficulty = Object.keys(QuizDifficulty).map((name) => {
  return {
    name,
    value: QuizDifficulty[name as keyof typeof QuizDifficulty],
  }
})
