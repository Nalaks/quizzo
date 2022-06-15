import { useState } from 'react'
import fetchQuizQuestions from './lib/fetcher'
import QuizLayout from './components/QuizLayout'
import QuizForm from './components/QuizForm'
import PaginatedItems from './components/PaginatedItems'
import LoadingSpinner from './components/LoadingSpinner'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [quiz, setQuiz] = useState()

  const handleStart = async () => {
    setLoading(true)
    setQuiz(await fetchQuizQuestions())
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
