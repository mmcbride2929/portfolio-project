import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      p={2}
      bg="brand.400"
      color="brand.100"
      textAlign="center"
      fontSize={{ base: '0.8rem', sm: '0.9rem' }}
    >
      © 2023 Michael McBride. All rights reserved.
    </Box>
  )
}
export default Footer
