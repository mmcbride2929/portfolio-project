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
            Since I can remember i have used a computer everday, which sparked
            my curiosity and led me to begin learning to code. Whether it was
            creating game bots or customizing HTML for my Myspace layouts, as I
            learned more I found myself enjoying my new found hobby
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
            Lately, my favorite programming activity has been crafting small
            sports apps. I enjoy watching sports and working with the stats can
            be really enjoyable. One of my biggest goals is to create and
            maintain my own sports app.
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
            When I'm not diving into development, you'll likely find me
            outdoors, indulging in my lifelong passion for fishing. It's not
            just a hobby for me; it's a way to bring friends together and enjoy
            each other's company.
          </chakra.p>
        </Box>
        <Image
          src={photo}
          borderRadius={2}
          w={{ base: '100%', sm: '300px' }}
          px={{ base: 5, sm: 0 }}
        />
      </Flex>
    </Box>
  )
}
export default Body
