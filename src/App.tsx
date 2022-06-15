import { useEffect } from 'react'
import fetchQuizQuestions from './lib/fetcher'

const App = () => {
  useEffect(() => {
    console.log(fetchQuizQuestions())
  }, [])
  return (
    <div>
      <h1>hello quizzo</h1>
    </div>
  )
}

export default App
