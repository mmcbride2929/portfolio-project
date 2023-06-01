import { Box, chakra } from '@chakra-ui/react'

const AboutHeader = () => {
  return (
    <Box textAlign="left" mb="5px">
      <chakra.h1>
        <chakra.span
          fontSize={{ base: '2.7rem', sm: '3rem' }}
          marginTop={{ base: '3rem', md: '0rem' }}
          fontWeight="600"
          color="brand.100"
          display={{
            base: 'block',
          }}
        >
          About Me
        </chakra.span>
      </chakra.h1>
    </Box>
  )
}
export default AboutHeader
