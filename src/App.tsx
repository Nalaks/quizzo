import { useEffect } from 'react'
import fetchQuizQuestions from './lib/fetcher'
import QuizLayout from './components/QuizLayout'
import QuizForm from './components/QuizForm'

const App = () => {
  // useEffect(() => {
  //   console.log(fetchQuizQuestions())
  // }, [])
  return (
    <QuizLayout>
      <QuizForm />
    </QuizLayout>
  )
}

export default App
