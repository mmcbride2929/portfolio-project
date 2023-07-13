import { Box, chakra, Stack, Image } from '@chakra-ui/react'

import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Title = () => {
  return (
    <Box
      pos="relative"
      overflow="hidden"
      p={{ base: 4, sm: 0 }}
      paddingTop={{ base: '5px', md: '25px' }}
    >
      <Box maxW="900px" mx="auto">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          pos="relative"
          pb={{
            base: 8,
            md: 12,
          }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            mt={{
              base: 12,
              md: 16,
            }}
          >
            <Box
              textAlign="left"
              w="100%"
              mx="auto"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Box p={5}>
                <chakra.h1 lineHeight="short" color="brand.500">
                  <chakra.span
                    fontSize={{
                      base: '1rem',
                      sm: '1.2rem',
                    }}
                    display={{
                      base: 'block',
                    }}
                  >
                    Hi, my name is
                  </chakra.span>
                  <chakra.span
                    fontSize={{ base: '2rem', sm: '2.5rem' }}
                    fontWeight="700"
                    display={{
                      base: 'block',
                    }}
                  >
                    Michael McBride
                  </chakra.span>
                </chakra.h1>
                <chakra.p
                  mx={{
                    sm: 'auto',
                    lg: 'auto',
                  }}
                  mb={3}
                  color="brand.400"
                  fontWeight="400"
                  maxW="700px"
                >
                  {' '}
                  and I'm a web developer based in Columbus, Ohio. With a focus
                  on the MERN stack, I specialize in creating engaging
                  full-stack web applications.
                </chakra.p>
                <Stack
                  direction={{
                    base: 'row',
                  }}
                  alignItems="center"
                >
                  <Box>
                    <chakra.a
                      color="brand.400"
                      cursor="pointer"
                      href="https://github.com/mmcbride2929"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <BsGithub className="github-icon-header" />
                    </chakra.a>
                  </Box>
                  <Box>
                    <chakra.a
                      color="brand.400"
                      cursor="pointer"
                      href={`mailto:mmcbride2929@gmail.com`}
                    >
                      <MdEmail className="email-icon-header" />
                    </chakra.a>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Title
