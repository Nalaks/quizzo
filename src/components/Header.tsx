import {
  Box,
  Flex,
  Heading,
  Button,
  useColorMode,
  Spacer,
  Divider,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box width="100%" paddingTop="4" paddingX="4">
      <Flex minWidth="max-content" alignItems="center" gap="2" marginBottom="8">
        <Spacer />
        <Heading as="h1" marginLeft="2">
          Quizzo
        </Heading>
        <Spacer />
        <Button onClick={toggleColorMode} marginRight="2">
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Divider />
    </Box>
  )
}

export default Header
