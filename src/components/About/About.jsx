import { Box } from '@chakra-ui/react'
import Body from './Body'

const About = () => {
  return (
    <Box
      px={4}
      bg="brand.400"
      id="about"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Body />
    </Box>
  )
}
export default About
