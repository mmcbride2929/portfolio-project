import { Box, chakra, Flex } from '@chakra-ui/react'
import image from '../../assets/headshot.jpg'
import AboutHeader from '../About/AboutHeader'

const Body = () => {
  return (
    <Box py="75px" display="flex" flexDirection="column" alignItems="center">
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'column', md: 'space-between' }}
        my={4}
        maxW="900px"
        mx="auto"
        bg="brand.400"
      >
        <Box
          as="img"
          src={image}
          maxW="250px"
          rounded="md"
          shadow="xl"
          my={{ base: '50px', md: '' }}
        />
        <Box>
          <AboutHeader />
          <chakra.p
            maxW={{ sm: '500px', md: '' }}
            px={{ base: '10px', sm: '20px', md: '30px' }}
            mt={{
              base: 3,
              sm: 5,
              md: 5,
            }}
            mx={{
              sm: 'auto',
              lg: 'auto',
            }}
            fontSize={{
              base: '0.9rem',
              sm: '1rem',
            }}
            color="brand.100"
            lineHeight="base"
            fontWeight="400"
            textAlign={{ base: '', md: 'center' }}
          >
            I am a web developer based in Columbus, Ohio with a passion for
            creating dynamic and user-friendly websites. In my free time, I
            enjoy spending time fishing, watching football and following the
            stock market. In 2023, I aim to further my skills by mastering
            TypeScript and actively participating in the local tech community.
          </chakra.p>
        </Box>
      </Flex>
    </Box>
  )
}
export default Body
