import { Flex, Spinner } from '@chakra-ui/react'

const LoadingSpinner = () => {
  return (
    <Flex align="center" justify="center" marginTop="24">
      <Spinner thickness="2px" boxSize="24" />
    </Flex>
  )
}

export default LoadingSpinner
