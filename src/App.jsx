import { Box, ChakraProvider } from '@chakra-ui/react'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import { myTheme } from './theme/theme'

const App = () => {
  return (
    <>
      <ChakraProvider theme={myTheme}>
        <Header />
        <Portfolio />
        <Contact />
      </ChakraProvider>
    </>
  )
}

export default App
