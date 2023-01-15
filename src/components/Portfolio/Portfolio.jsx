import { Box } from '@chakra-ui/react'
import PortfolioHeader from './PortfolioHeader'
import Projects from './Projects'

const Portfolio = () => {
  return (
    <Box
      bg="brand.200"
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
