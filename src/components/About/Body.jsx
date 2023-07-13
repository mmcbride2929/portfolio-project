import { Box, chakra, Flex, Image } from '@chakra-ui/react'
import photo from '../../assets/IMG-0995.jpg'
import AboutHeader from '../About/AboutHeader'

const Body = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={{ base: 5, md: 0 }}
    >
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'column', md: 'space-between' }}
        maxW="900px"
        mx="auto"
        bg="brand.400"
      >
        <Box
          maxW={{ sm: '700px', md: '400px' }}
          mr={{ base: '0', md: '4rem' }}
          px={{ base: 4, sm: 0 }}
        >
          <AboutHeader />
          <chakra.p
            mt={{
              base: 3,
              sm: 5,
              md: 5,
            }}
            mx={{
              sm: 'auto',
              md: '0',
            }}
            maxW={{ base: '700px', md: '350px' }}
            fontSize={{
              base: '0.9rem',
            }}
            color="brand.100"
            textAlign="left"
          >
            When I'm not programming, I am enjoying outdoor activities, watching
            sports, and trying different local restaurants. Lately, in my spare
            time, I've been doing a lot of river fishing for catfish and
            building sports apps.
          </chakra.p>

          <chakra.p
            mt={{
              base: 3,
              sm: 5,
              md: 5,
            }}
            mx={{
              sm: 'auto',
              md: '0',
            }}
            maxW={{ base: '700px', md: '350px' }}
            fontSize={{
              base: '0.9rem',
            }}
            color="brand.100"
            textAlign="left"
          >
            Growing up, I spent a lot of time playing PC games with my friends.
            I loved the challenge and excitement of the games, but I often found
            that they took too much time to progress. This gave me the idea of
            automating gameplay, which led me to discover building bots and
            ultimately programming. Ever since, I have turned a challenging
            hobby into a fun and rewarding career.
          </chakra.p>
        </Box>
        <Image
          src={photo}
          borderRadius={2}
          w={{ base: '100%', md: '300px' }}
          px={{ base: 5, sm: 0 }}
        />
      </Flex>
    </Box>
  )
}
export default Body
