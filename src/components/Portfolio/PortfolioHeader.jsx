import { Box, chakra } from '@chakra-ui/react'

const PortfolioHeader = () => {
  return (
    <Box
      textAlign="left"
      maxW="700px"
      w="100%"
      m="0 auto"
      mb="50px"
      px={{ base: 4, sm: 4 }}
    >
      <chakra.h1 letterSpacing="tight" lineHeight="short">
        <chakra.span
          fontSize={{ base: '2.7rem', sm: '3rem' }}
          fontWeight="600"
          color="brand.400"
          display={{
            base: 'block',
          }}
        >
          Portfolio
        </chakra.span>
      </chakra.h1>
      <chakra.h2 letterSpacing="tight" lineHeight="short" color="brand.400">
        <chakra.span
          fontSize={{ base: '1rem', sm: '1.2rem' }}
          fontWeight="500"
          color="brand.400"
          display={{
            base: 'block',
          }}
        >
          Check out my latest projects.
        </chakra.span>
      </chakra.h2>
    </Box>
  )
}
export default PortfolioHeader
