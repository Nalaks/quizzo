import { Flex, Heading, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { QuizItemProps } from '../types/types'

const QuizItem: FC<QuizItemProps> = ({ item, index, length }) => {
  const [value, setValue] = useState(item.answers[0])
  return (
    <Flex align="center" justify="center" direction="column">
      <Flex width="75vw" align="center" justify="center" direction="column">
        <Heading as="h6" marginTop="12">
          Question {`${index} / ${length}`}
        </Heading>
        <Heading as="h5" marginY="12">
          <Text dangerouslySetInnerHTML={{ __html: item.question }} />
        </Heading>
        <RadioGroup marginBottom="12" onChange={setValue} value={value}>
          <Stack spacing={4}>
            {item.answers.map((answer) => (
              <Radio value={answer} size="lg">
                <Text fontSize="2xl">{answer}</Text>
              </Radio>
            ))}{' '}
          </Stack>
        </RadioGroup>
      </Flex>
    </Flex>
  )
}

export default QuizItem
