import {
  Box,
  chakra,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { Link } from 'react-scroll'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={4} position="relative">
        <Flex
          h={12}
          alignItems={'center'}
          justifyContent={{ base: 'flex-start', sm: 'center' }}
          color="brand.400"
        >
          <IconButton
            position="absolute"
            top="15px"
            left="2px"
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ sm: 'none' }}
            bg="brand.100"
            onClick={isOpen ? onClose : onOpen}
            color="brand.300"
            _hover={{
              bg: 'brand.400',
              color: 'brand.200',
              outline: '1px solid #fff',
            }}
            zIndex={99}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', sm: 'flex' }}
            >
              <chakra.span
                cursor="pointer"
                _hover={{ borderBottom: '1px solid black' }}
              >
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  px={2}
                  py={1}
                  fontSize="0.8rem"
                  fontWeight="600"
                  _hover={{ borderBottom: '1px solid black' }}
                >
                  PROJECTS
                </Link>
              </chakra.span>
              <chakra.span
                cursor="pointer"
                _hover={{ borderBottom: '1px solid black' }}
              >
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  px={2}
                  py={1}
                  fontSize="0.8rem"
                  fontWeight="600"
                  cursor="pointer"
                  _hover={{
                    textDecoration: 'none',
                    color: 'silver',
                  }}
                >
                  ABOUT
                </Link>
              </chakra.span>
              <chakra.span
                cursor="pointer"
                _hover={{ borderBottom: '1px solid black' }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  px={2}
                  py={1}
                  fontSize="0.8rem"
                  fontWeight="500"
                  _hover={{ borderBottom: '1px solid black' }}
                >
                  CONTACT
                </Link>
              </chakra.span>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box
            position="absolute"
            top="0px"
            left="0px"
            py={4}
            display={{ base: 'flex', sm: 'none' }}
            color="brand.100"
            w="100%"
            flexDirection={{ base: 'column', sm: 'none' }}
            alignItems={{ base: 'center', sm: 'none' }}
          >
            <Stack as={'nav'} spacing={4} textAlign="center">
              <chakra.span
                _hover={{
                  textDecoration: 'none',
                  bg: 'brand.100',
                  color: 'brand.400',
                  rounded: 'sm',
                  cursor: 'pointer',
                }}
                zIndex={99}
                p="5px"
              >
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  fontSize="0.8rem"
                  fontWeight="500"
                  smooth={true}
                  duration={500}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'brand.300',
                    color: 'brand.400',
                  }}
                  to="portfolio"
                  onClick={isOpen ? onClose : onOpen}
                >
                  PROJECTS
                </Link>
              </chakra.span>
              <chakra.span
                _hover={{
                  textDecoration: 'none',
                  bg: 'brand.100',
                  color: 'brand.400',
                  rounded: 'sm',
                  cursor: 'pointer',
                }}
                zIndex={99}
                p="5px"
              >
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  fontSize="0.8rem"
                  fontWeight="500"
                  to="about"
                  onClick={isOpen ? onClose : onOpen}
                  smooth={true}
                  duration={500}
                >
                  ABOUT{' '}
                </Link>
              </chakra.span>
              <chakra.span
                _hover={{
                  textDecoration: 'none',
                  bg: 'brand.100',
                  color: 'brand.400',
                  rounded: 'sm',
                  cursor: 'pointer',
                }}
                zIndex={99}
                p="5px"
              >
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  fontSize="0.8rem"
                  fontWeight="500"
                  smooth={true}
                  duration={500}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'brand.100',
                    color: 'brand.400',
                  }}
                  to="contact"
                  onClick={isOpen ? onClose : onOpen}
                >
                  CONTACT
                </Link>
              </chakra.span>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Navbar
