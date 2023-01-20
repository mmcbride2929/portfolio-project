import fishGridImage from '../../assets/fish-grid.png'
import pokePetImage from '../../assets/poke-pet.png'
import chucksTrucksImage from '../../assets/chucks-trucks.png'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Project from './Project'

const initialState = [
  {
    image: fishGridImage,
    title: 'Fish-Grid',
    description:
      'Fish-Grid is a social media application designed for fishing enthusiasts. It was built using the MERN stack and also has added security through JWT authentication. ',

    demo: 'https://wondrous-mooncake-8a5351.netlify.app/',
    github: 'https://github.com/mmcbride2929/Fish-Grid',
    id: '001',
  },
  {
    image: pokePetImage,
    title: 'Poke-Pet',
    description:
      'Poke-Pet is a interactive Pokemon card generator, made specifically for photos of your pets. It was built using React and styled with Styled-Components.',

    demo: 'https://cranky-davinci-d9d838.netlify.app/',
    github: 'https://github.com/mmcbride2929/poke-pet',
    id: '002',
  },
  {
    image: chucksTrucksImage,
    title: 'Chucks-Trucks',
    description:
      "Chuck's Trucks is a mock car dealership site built using the MERN stack and styled with Chakra UI. I built it as an opportunity to deepen my understanding of the FE/BE relationship and workflow.",

    demo: 'https://aesthetic-choux-7c3aff.netlify.app/',
    github: 'https://github.com/mmcbride2929/Chucks-Trucks-V3',
    id: '003',
  },
]

const Projects = () => {
  const [projects, setProjects] = useState(initialState)

  return (
    <Box
      px={{ base: 4, md: 20 }}
      w="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      {projects.map((project) => {
        return <Project project={project} key={project.id} />
      })}
    </Box>
  )
}
export default Projects
