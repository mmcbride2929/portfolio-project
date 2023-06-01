import { Box } from '@chakra-ui/react'
import Body from './Body'

const About = () => {
  return (
    <Box
      py={16}
      bg="brand.400"
      id="about"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Body />
    </Box>
  )
}
export default About
