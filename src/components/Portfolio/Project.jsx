import { Box, chakra, Link, Stack } from '@chakra-ui/react'

const Project = ({ project }) => {
  const { image, title, description, demo, github } = project
  console.log(demo)
  const handleClick = () => {
    console.log(demo)
    window.open(demo, '_blank')
  }

  return (
    <Box
      bg="brand.100"
      mx={{
        lg: 8,
        xl: '25px',
      }}
      mb={{ base: '50px', lg: '75px', xl: '50px' }}
      maxW={{
        sm: '500px',
        xl: '325px',
      }}
      shadow={{
        sm: 'lg',
      }}
      rounded={{
        sm: 'lg',
      }}
      display={{ xl: 'flex' }}
      justifyContent={{ xl: 'center' }}
      alignItems={{ xl: 'center' }}
      flexDirection={{ xl: 'column' }}
    >
      <Box>
        <Box
          onClick={handleClick}
          cursor="pointer"
          h={{
            base: 64,
          }}
          rounded={{
            sm: 'md',
          }}
          minW={{ xl: '325px' }}
          border="10px solid #fff"
          borderBottom="0px"
          bgSize="cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></Box>
      </Box>

      <Box
        py={8}
        px={{ base: 6, xl: 6 }}
        maxW={{
          base: 'xl',
          lg: '5xl',
          xl: '300px',
        }}
      >
        <Box display="flex" flexDirection="center" justifyContent="center">
          <chakra.a
            href={demo}
            rel="noopener noreferrer"
            target="_blank"
            display="inline-block"
          >
            <chakra.h2
              fontSize={{
                base: '2xl',
                md: '3xl',
                xl: '2xl',
              }}
              color="brand.400"
              fontWeight="bold"
              _hover={{ cursor: 'pointer' }}
            >
              {title}
            </chakra.h2>
          </chakra.a>
        </Box>

        <chakra.p mt={4} color="brand.400">
          {description}
        </chakra.p>
        <Stack
          direction={{
            base: 'row',
          }}
          mb={{
            base: 4,
            sm: 2,
          }}
          spacing={{
            base: 6,
            sm: 10,
          }}
          justifyContent="center"
        >
          <Box display="flex" marginTop="25px">
            <chakra.a
              href={demo}
              rel="noopener noreferrer"
              target="_blank"
              w={{ base: '100px', sm: '125px', xl: '100px' }}
              h="40px"
              display="flex"
              mx="25px"
              alignItems="center"
              justifyContent="center"
              border="solid 1px transparent"
              fontSize={{
                base: 'md',
              }}
              rounded="md"
              color="brand.100"
              bg="brand.400"
              _hover={{
                bg: 'brand.200',
                color: 'brand.400',
                cursor: 'pointer',
              }}
              px={{
                base: 8,
                md: 10,
                xl: 8,
              }}
              py={{
                base: 3,
                md: 4,
                xl: 3,
              }}
            >
              Demo
            </chakra.a>

            <chakra.a
              href={github}
              rel="noopener noreferrer"
              target="_blank"
              w={{ base: '100px', sm: '125px', xl: '100px' }}
              h="40px"
              display="flex"
              alignItems="center"
              mx="25px"
              justifyContent="center"
              px={{
                base: 8,
                md: 10,
                xl: 8,
              }}
              py={{
                base: 3,
                md: 4,
                xl: 3,
              }}
              border="solid 1px transparent"
              fontSize={{
                base: 'md',
                md: 'lg',
              }}
              rounded="md"
              color="brand.100"
              bg="brand.400"
              _hover={{
                bg: 'brand.200',
                cursor: 'pointer',
                color: 'brand.400',
              }}
            >
              Github
            </chakra.a>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
export default Project
