import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  useToast,
  chakra,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const toast = useToast()

  const handleSubmit = (event) => {
    event.preventDefault()

    const newErrors = { name: '', email: '', message: '' }
    let hasError = false

    if (!name) {
      newErrors.name = 'Name required'
      hasError = true
    }

    if (!email) {
      newErrors.email = 'Email required'
      hasError = true
    } else if (!/^\S+@\S+$/.test(email)) {
      newErrors.email = 'Email invalid'
      hasError = true
    }

    if (!message) {
      newErrors.message = 'Message required'
      hasError = true
    }

    setErrors(newErrors)

    if (!hasError) {
      emailjs
        .sendForm(
          'service_wboq687',
          'template_tizpc2f',
          form.current,
          '5PlCPivfh7oZDJB5R'
        )
        .then(
          (result) => {
            console.log(result.text)
            form.current.reset()
            setName('')
            setEmail('')
            setMessage('')
          },
          (error) => {
            console.log(error.text)
          }
        )

      toast({
        title: 'Your message has been sent!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  return (
    <Box px={{ base: '', md: 20 }} maxW="600px" w="100%">
      <form onSubmit={handleSubmit} ref={form}>
        <FormControl isInvalid={errors.name !== ''}>
          <chakra.h3 color="red" m={0} fontSize="0.7rem">
            {errors.name.toUpperCase()}
          </chakra.h3>
          <FormLabel m={0} fontSize="0.7rem" htmlFor="name">
            Name
          </FormLabel>
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="user_name"
            type="text"
            placeholder="Enter your name"
            p={0}
            m={0}
            mb={2}
            fontSize="0.8rem"
            border="none"
            maxLength="25"
            minLength="3"
            _focus={{
              boxShadow: 'none',
              outline: 'none',
              borderBottom: '1px solid silver',
              shadow: 'xl',
              dropShadow: 'xl',
              bg: 'none',
            }}
            _invalid="none"
            borderRadius={0}
            borderBottom="1px solid #e5e5e5"
          />
        </FormControl>

        <FormControl mt={4}>
          <chakra.h3 color="red" m={0} fontSize="0.7rem">
            {errors.email.toUpperCase()}
          </chakra.h3>
          <FormLabel m={0} fontSize="0.7rem" htmlFor="email">
            Email
          </FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
            id="email"
            type="email"
            placeholder="Enter your email"
            p={0}
            m={0}
            mb={2}
            fontSize="0.8rem"
            border="none"
            maxLength="35"
            minLength="7"
            _focus={{
              boxShadow: 'none',
              outline: 'none',
              borderBottom: '1px solid silver',
              shadow: 'xl',
              dropShadow: 'xl',
              bg: 'none',
            }}
            borderRadius={0}
            borderBottom="1px solid #e5e5e5"
          />
        </FormControl>

        <FormControl mt={4}>
          <chakra.h3 color="red" m={0} fontSize="0.7rem">
            {errors.message.toUpperCase()}
          </chakra.h3>
          <FormLabel m={0} fontSize="0.7rem" htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            h="200px"
            id="message"
            placeholder="Enter your message"
            py={4}
            px={0}
            m={0}
            mb={2}
            fontSize="0.8rem"
            border="none"
            maxLength="250"
            minLength="7"
            _focus={{
              boxShadow: 'none',
              outline: 'none',
              borderBottom: '1px solid silver',
              shadow: 'xl',
              dropShadow: 'xl',
              bg: 'none',
            }}
            borderRadius={0}
            borderBottom="1px solid #e5e5e5"
          />
        </FormControl>

        <Button
          m="0 auto"
          mt={10}
          w={{ base: '100px', sm: '125px' }}
          h="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={{
            base: 8,
            md: 10,
          }}
          py={{
            base: 3,
            md: 4,
          }}
          border="solid 1px transparent"
          rounded="md"
          shadow="sm"
          color="brand.400"
          bg="brand.200"
          _hover={{
            bg: 'silver',
            color: 'brand.400',
            shadow: 'md',
          }}
          cursor="pointer"
          type="submit"
          fontWeight="400"
        >
          Send
        </Button>
      </form>
    </Box>
  )
}
export default ContactForm
