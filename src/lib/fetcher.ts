import { Question } from '../types/types'
import { shuffle } from './helper'

const fetchQuizQuestions = async (params: any): Promise<Question[]> => {
  const { category = 99, difficulty = 'easy', amount = 10 } = params
  let endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  if (difficulty === 'any' && category === 99) {
    endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple`
  } else if (category === 99) {
    endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  } else if (difficulty === 'any') {
    endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`
  }
  const res = await fetch(endpoint)
  const data = await res.json()
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffle([...question.incorrect_answers, question.correct_answer]),
  }))
}

export default fetchQuizQuestions
