import { Box, ChakraProvider } from '@chakra-ui/react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Contact/Footer'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import { myTheme } from './theme/theme'

const App = () => {
  return (
    <Box bg="#001220">
      <ChakraProvider theme={myTheme}>
        <Header />
        <Portfolio />
        <Contact />
        <Footer />
      </ChakraProvider>
    </Box>
  )
}

export default App
