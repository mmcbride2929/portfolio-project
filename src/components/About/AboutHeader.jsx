import { Box, chakra } from '@chakra-ui/react'

const AboutHeader = () => {
  return (
    <Box textAlign="center" mb="25px">
      <chakra.h1 letterSpacing="tight" lineHeight="short">
        <chakra.span
          fontSize={{ base: '2.7rem', sm: '3rem' }}
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
