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
    <Box px={{ base: '', md: 20 }} maxW="500px" w="100%">
      <form onSubmit={handleSubmit} ref={form} mb={4}>
        <FormControl isInvalid={errors.name !== ''}>
          <chakra.h3 color="red" m={0} fontSize="0.7rem">
            {errors.name.toUpperCase()}
          </chakra.h3>
          <FormLabel m={0} fontSize="0.7rem" htmlFor="name" mb={2} ml={1}>
            Name
          </FormLabel>
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="user_name"
            type="text"
            placeholder="Enter your name"
            mb={2}
            fontSize="0.8rem"
            maxLength="25"
            minLength="3"
            _focus={{
              boxShadow: 'none',
              outline: 'none',
              border: '1px solid white',
              shadow: 'xl',
              dropShadow: 'xl',
              bg: 'none',
            }}
            borderRadius={5}
            border="1px solid 
            #376288"
          />
        </FormControl>

        <FormControl mt={4}>
          <chakra.h3 color="red" m={0} fontSize="0.7rem">
            {errors.email.toUpperCase()}
          </chakra.h3>
          <FormLabel m={0} fontSize="0.7rem" htmlFor="email" mb={2} ml={1}>
            Email
          </FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
            id="email"
            type="email"
            placeholder="Enter your email"
            mb={2}
            fontSize="0.8rem"
            maxLength="35"
            minLength="7"
            _focus={{
              boxShadow: 'none',
              outline: 'none',
              border: '1px solid white',
              shadow: 'xl',
              dropShadow: 'xl',
              bg: 'none',
            }}
            borderRadius={5}
            border="1px solid 
            #376288"
          />
        </FormControl>

        <FormControl mt={4}>
          <chakra.h3 color="red" m={0} fontSize="0.7rem">
            {errors.message.toUpperCase()}
          </chakra.h3>
          <FormLabel m={0} fontSize="0.7rem" htmlFor="message" mb={2} ml={1}>
            Message
          </FormLabel>
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            h="175px"
            id="message"
            placeholder="Enter your message"
            py={4}
            mb={2}
            fontSize="0.8rem"
            minLength="7"
            _focus={{
              boxShadow: 'none',
              outline: 'none',
              border: '1px solid white',
              shadow: 'xl',
              dropShadow: 'xl',
              bg: 'none',
            }}
            borderRadius={5}
            border="1px solid 
            #376288"
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
          bg="brand.100"
          _hover={{
            bg: 'brand.400',
            color: 'brand.100',
            shadow: 'md',
            border: '1px solid white',
          }}
          cursor="pointer"
          type="submit"
          mb={4}
          fontWeight="400"
        >
          Send
        </Button>
      </form>
    </Box>
  )
}
export default ContactForm
