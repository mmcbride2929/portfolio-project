import { Box } from '@chakra-ui/react'
import ContactForm from './ContactForm'
import ContactHeader from './ContactHeader'

const Contact = () => {
  return (
    <Box
      id="contact"
      bg="brand.100"
      minH="100vh"
      px={4}
      py="75px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="brand.400"
    >
      <ContactHeader />
      <ContactForm />
    </Box>
  )
}
export default Contact
