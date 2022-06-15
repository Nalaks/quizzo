import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import fetchQuizQuestions from './lib/fetcher'
import QuizLayout from './components/QuizLayout'
import QuizForm from './components/QuizForm'
import PaginatedItems from './components/PaginatedItems'
import LoadingSpinner from './components/LoadingSpinner'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  // const [quiz, setQuiz] = useState()
  const quiz = useAppSelector((state) => state.quizItems.value)
  const dispatch = useAppDispatch()

  const handleStart = async () => {
    setLoading(true)
    dispatch(await fetchQuizQuestions())
    setStartQuiz(true)
    setLoading(false)
  }
  return (
    <QuizLayout>
      {!startQuiz && !loading && <QuizForm handleStart={handleStart} />}
      {loading && <LoadingSpinner />}
      {startQuiz && quiz && (
        <PaginatedItems itemsPerPage={1} quizItems={quiz} />
      )}
    </QuizLayout>
  )
}

export default App
