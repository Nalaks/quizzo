import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { QuizLayoutProps } from '../types/types'
import Header from './Header'

const QuizLayout: FC<QuizLayoutProps> = ({ children }) => {
  return (
    <Box height="100vh" width="100vw">
      <Header />
      {children}
    </Box>
  )
}

export default QuizLayout
