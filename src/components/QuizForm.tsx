import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Select,
} from '@chakra-ui/react'
import { FC } from 'react'
import { quizCategory, quizDifficulty } from '../lib/helper'
import { QuizFormProps } from '../types/types'

const QuizForm: FC<QuizFormProps> = ({ handleStart }) => {
  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Select your Quiz settings</Heading>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={8}>
            <FormControl id="numberOfQuestions">
              <FormLabel>Number of Questions</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="category">
              <FormLabel>Category</FormLabel>
              <Select>
                {quizCategory.map((category) => {
                  return (
                    <option key={category.name} value={category.value}>
                      {category.name}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
            <FormControl id="difficulty">
              <FormLabel>Difficulty</FormLabel>
              <Select>
                {quizDifficulty.map((difficulty) => {
                  return (
                    <option key={difficulty.name} value={difficulty.value}>
                      {difficulty.name}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
            <Button
              bg="green.400"
              color="white"
              _hover={{
                bg: 'green.600',
              }}
              onClick={handleStart}
            >
              Start Game
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default QuizForm
