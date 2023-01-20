import { Box, chakra, Stack } from '@chakra-ui/react'

const Title = () => {
  return (
    <Box pos="relative" overflow="hidden" py="75px">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{
            base: 8,
            sm: 18,

            lg: 28,
            xl: 32,
          }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            maxW={{
              base: '7xl',
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 12,
              md: 16,
              lg: 20,
              xl: 28,
            }}
          >
            <Box
              textAlign="center"
              w={{
                base: 'full',
                md: 11 / 12,
                xl: 8 / 12,
              }}
              mx="auto"
            >
              <chakra.h1
                letterSpacing="tight"
                lineHeight="short"
                color="brand.100"
              >
                <chakra.span
                  fontSize={{ base: '3rem', sm: '3.3rem' }}
                  fontWeight="600"
                  display={{
                    base: 'block',
                  }}
                >
                  Hello,
                </chakra.span>
                <chakra.span
                  fontSize={{ base: '1.7rem', sm: '2rem' }}
                  fontWeight="400"
                  display={{
                    base: 'block',
                  }}
                >
                  I'm Michael McBride
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                mx={{
                  sm: 'auto',
                  lg: 'auto',
                }}
                mb={6}
                fontSize={{
                  base: '0.9rem',
                  sm: '1rem',
                }}
                color="brand.200"
                lineHeight="base"
                fontWeight="400"
                maxW="650px"
              >
                {' '}
                As a full-stack web developer, I am experienced in utilizing
                technologies such as React, Node.js, and MongoDB to build
                scalable and visually appealing websites and apps.
              </chakra.p>
              <Stack
                direction={{
                  base: 'row',
                }}
                mb={{
                  base: 4,
                  md: 8,
                }}
                spacing={{
                  base: 6,
                  sm: 10,
                }}
                justifyContent="center"
              >
                <Box shadow="md">
                  <chakra.a
                    w={{ base: '100px', sm: '125px' }}
                    h="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{
                      base: 'md',
                    }}
                    rounded="md"
                    color="brand.400"
                    bg="brand.200"
                    _hover={{
                      bg: 'silver',
                      color: 'brand.400',
                    }}
                    px={{
                      base: 8,
                      md: 10,
                    }}
                    py={{
                      base: 3,
                      md: 4,
                    }}
                    cursor="pointer"
                    href="https://github.com/mmcbride2929"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github{' '}
                  </chakra.a>
                </Box>
                <Box mt={[3, 0]} ml={[null, 3]}>
                  <chakra.a
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
                    fontSize={{
                      base: 'md',
                      md: 'lg',
                    }}
                    rounded="md"
                    color="brand.400"
                    bg="brand.200"
                    _hover={{
                      bg: 'silver',
                      color: 'brand.400',
                    }}
                    cursor="pointer"
                    href={`mailto:mmcbride2929@gmail.com`}
                  >
                    Contact
                  </chakra.a>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Title
