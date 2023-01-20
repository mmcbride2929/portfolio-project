import { Box } from '@chakra-ui/react'
import PortfolioHeader from './PortfolioHeader'
import Projects from './Projects'

const Portfolio = () => {
  return (
    <Box
      id="portfolio"
      minH="100vh"
      bg="brand.100"
      px={4}
      py="75px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <PortfolioHeader />
      <Projects />
    </Box>
  )
}
export default Portfolio
