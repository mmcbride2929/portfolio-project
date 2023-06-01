import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Title from './Title'
import About from '../About/About'

const Header = () => {
  return (
    <Box px={0} position="relative" bg="brand.100">
      <Navbar />
      <Title />
      <About />
    </Box>
  )
}
export default Header
