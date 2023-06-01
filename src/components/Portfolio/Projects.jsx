import chuckImage from '../../assets/chucks-trucks2.png'
import pokePetImage from '../../assets/poke-pet.png'
import final53 from '../../assets/final53.png'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Project from './Project'

const initialState = [
  {
    image: chuckImage,
    title: "Chuck's-Trucks",
    description:
      "Chucks-Trucks showcases a fictional truck dealership. It features a homepage with ongoing sales, reviews, and details about Chuck's latest offers. Users can browse the inventory, sort vehicles, and submit their info for loan approval.",

    demo: 'https://chucks-trucks.netlify.app/',
    github: 'https://github.com/mmcbride2929/Chucks-Trucks-V3',
    id: '001',
  },
  {
    image: final53,
    title: 'Final 53',
    description:
      'The roster building app is designed for fans to create a final 53 man roster for any NFL team. Users can select any team, add and cut players, sort by offense & defense, and lastly search for players via the search-bar at the top.',

    demo: 'https://final53.netlify.app/',
    github: 'https://github.com/mmcbride2929/Roster-Predictor-V2',
    id: '002',
  },

  {
    image: pokePetImage,
    title: 'Poke-Pet',
    description:
      'Poke-Pet is a interactive Pokemon card generator, made specifically for photos of your pets. It was built using React and styled with Styled-Components.',

    demo: 'https://poke-pet.netlify.app/',
    github: 'https://github.com/mmcbride2929/poke-pet',
    id: '003',
  },
]

const Projects = () => {
  const [projects, setProjects] = useState(initialState)

  return (
    <Box
      px={{ base: 4, md: 4 }}
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
