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
import { FiExternalLink } from 'react-icons/fi'
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
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      mb="50px"
      pb="10px"
      maxW="700px"
    >
      <Image
        onClick={handleClick}
        objectFit="cover"
        maxW={{ base: '100%', sm: '225px', md: '250px' }}
        src={image}
        cursor="pointer"
      />

      <Stack>
        <CardBody
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
            href={demo}
            rel="noopener noreferrer"
            mx={'10px'}
            target="_blank"
          >
            <FiExternalLink className="demo-icon" />
          </chakra.a>

          <chakra.a
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            mx={'10px'}
          >
            <BsGithub className="github-icon" />
          </chakra.a>
        </CardFooter>
      </Stack>
    </Card>
  )
}
export default Project
