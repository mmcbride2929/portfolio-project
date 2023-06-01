import { Box } from '@chakra-ui/react'
import ContactForm from './ContactForm'
import ContactHeader from './ContactHeader'

const Contact = () => {
  return (
    <Box
      id="contact"
      bg="brand.400"
      minH="100vh"
      px={8}
      py="75px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="brand.100"
    >
      <ContactHeader />
      <ContactForm />
    </Box>
  )
}
export default Contact
