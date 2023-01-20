import { Box, chakra } from '@chakra-ui/react'

const ContactHeader = () => {
  return (
    <Box mb="50px" textAlign="center">
      <chakra.h1
        fontSize={{ base: '2.7rem', sm: '3rem' }}
        fontWeight="600"
        color="brand.400"
        display={{
          base: 'block',
        }}
      >
        Contact
      </chakra.h1>

      <chakra.h2
        fontSize={{ base: '1rem', sm: '1.2rem' }}
        fontWeight="500"
        color="brand.400"
        display={{
          base: 'block',
        }}
      >
        Have a question or proposal?
        <chakra.p>Reach out.</chakra.p>
      </chakra.h2>
    </Box>
  )
}

export default ContactHeader
