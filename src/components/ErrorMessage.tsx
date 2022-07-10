import { Alert, AlertIcon } from '@chakra-ui/react'
import { FC } from 'react'

const ErrorMessage: FC = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      Oops! Something went wrong. Please try again
    </Alert>
  )
}

export default ErrorMessage
