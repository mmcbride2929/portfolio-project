import {
  Box,
  chakra,
  Image,
  Text,
  Heading,
  CardBody,
  Card,
  Stack,
  CardFooter,
} from '@chakra-ui/react'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Project = ({ project }) => {
  const { image, title, description, demo, github } = project

  const handleClick = () => {
    window.open(demo, '_blank')
  }

  return (
    <Card
      border="none"
      borderBottom="1.5px solid silver"
      borderRadius={0}
      direction={{ base: 'column', md: 'row' }}
      overflow="hidden"
      variant="outline"
      mb="50px"
      pb="10px"
      maxW="700px"
    >
      <Image
        onClick={handleClick}
        objectFit="contain"
        maxW={{ base: '100%', sm: '100%', md: '275px' }}
        src={image}
        cursor="pointer"
        px={{ base: 0, sm: 0 }}
      />

      <Stack>
        <CardBody
          px={{ base: 0, md: 4 }}
          color="brand.400"
          minW={{ base: '300px', sm: '240px', md: '250px' }}
          textAlign={{ base: 'left', md: 'left' }}
        >
          <Heading size="md" cursor="pointer" _hover={{ color: 'silver' }}>
            <chakra.a href={demo} rel="noopener noreferrer" target="_blank">
              {title}
            </chakra.a>
          </Heading>

          <Text py="2">{description}</Text>
        </CardBody>

        <CardFooter
          p="5px"
          display="flex"
          justifyContent={{ base: 'flex-end', md: 'flex-end' }}
        >
          <chakra.a
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            mx={'10px'}
          >
            <BsGithub className="github-icon" />
          </chakra.a>

          <chakra.a
            href={demo}
            rel="noopener noreferrer"
            mx={'1px'}
            target="_blank"
          >
            <Box
              className="demo-icons"
              display="flex"
              borderBottom="1px solid white"
              _hover={{ color: 'silver' }}
            >
              <chakra.span>Demo</chakra.span>
              <BsArrowRightShort className="demo-icon" />
            </Box>
          </chakra.a>
        </CardFooter>
      </Stack>
    </Card>
  )
}
export default Project
