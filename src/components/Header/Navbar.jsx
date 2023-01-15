import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={4}>
        <Flex
          h={12}
          alignItems={'center'}
          justifyContent={{ base: 'flex-start', sm: 'center' }}
          color="brand.100"
        >
          <IconButton
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
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', sm: 'flex' }}
            >
              <Link
                px={2}
                py={1}
                fontSize="0.8rem"
                fontWeight="600"
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.200',
                }}
                href={'#'}
              >
                ABOUT
              </Link>
              <Link
                px={2}
                py={1}
                fontSize="0.8rem"
                fontWeight="600"
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.200',
                }}
                href={'#projects'}
              >
                PROJECTS
              </Link>
              <Link
                px={2}
                py={1}
                fontSize="0.8rem"
                fontWeight="500"
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.200',
                }}
                href={'#contact'}
              >
                CONTACT
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ sm: 'none' }} color="brand.100">
            <Stack as={'nav'} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                fontSize="0.8rem"
                fontWeight="500"
                _hover={{
                  textDecoration: 'none',
                  bg: 'brand.100',
                  color: 'brand.400',
                }}
                href={'#about'}
              >
                ABOUT
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                fontSize="0.8rem"
                fontWeight="500"
                _hover={{
                  textDecoration: 'none',
                  bg: 'brand.100',
                  color: 'brand.400',
                }}
                href={'#projects'}
              >
                PROJECTS
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                fontSize="0.8rem"
                fontWeight="500"
                _hover={{
                  textDecoration: 'none',
                  bg: 'brand.100',
                  color: 'brand.400',
                }}
                href={'#contact'}
              >
                CONTACT
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Navbar
