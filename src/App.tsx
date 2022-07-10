import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import fetchQuizQuestions from './lib/fetcher'
import QuizForm from './components/QuizForm'
import PaginatedItems from './components/PaginatedItems'
import LoadingSpinner from './components/LoadingSpinner'
import { Question } from './types/types'
import ErrorMessage from './components/ErrorMessage'

const App: FC = () => {
  const [startQuiz, setStartQuiz] = useState(false)
  const { isLoading, isError, data } = useQuery<Question[], Error>(
    'quizItems',
    fetchQuizQuestions,
  )

  const handleStart = async () => {
    setStartQuiz(true)
    console.log(data)
  }
  return (
    <>
      {!startQuiz && !isLoading && <QuizForm handleStart={handleStart} />}
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorMessage />}
      {startQuiz && data && (
        <PaginatedItems itemsPerPage={1} quizItems={data} />
      )}
    </>
  )
}

export default App
