import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Title from './Title'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
const Header = () => {
  return (
    <Box px={4} position="relative" bg="brand.400" minH="100vh">
      <Navbar />
      <Title />
      <Link to="portfolio" smooth={true} duration={500}>
        <BsFillArrowDownCircleFill
          fill="#fff"
          size="35px"
          className="header-arrow-down"
          cursor="pointer"
        />
      </Link>
    </Box>
  )
}
export default Header
