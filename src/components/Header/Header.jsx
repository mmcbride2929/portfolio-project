import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Title from './Title'

const Header = () => {
  return (
    <Box bg="brand.400" px={4}>
      <Navbar />
      <Title />
    </Box>
  )
}
export default Header
