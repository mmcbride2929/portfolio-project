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
      'Fish-Grid is a social media app, designed for fishing enthusiasts. It offers a platform for users to share a post of their catch-of-the-day. These posts include details their catch, such as the size, location, and bait used. Fish-Grid is built with a similar functionality to Instagram, creating an easy-to-use and intuitive interface for users.',

    //  The most notable concept I learned while building this app was how to integrate user authentication using JWT tokens when communicating with the backend.

    demo: 'https://wondrous-mooncake-8a5351.netlify.app/',
    github: 'https://github.com/mmcbride2929/Fish-Grid',
    id: '001',
  },
  {
    image: pokePetImage,
    title: 'Poke-Pet',
    description:
      'Poke-Pet is a interactive Pokemon card generator. It was built using React and styled with Styled-Components. The app enables users to upload a photo and describe their pet, which is then transformed into a Pokemon card. The card can then be downloaded as a PNG file.',

    // A notable challenge I faced was figuring out how to take a screenshot of the card section of the app and make it downloadable. This issue was resolved by using a React package with easy to follow documentation.

    demo: 'https://cranky-davinci-d9d838.netlify.app/',
    github: 'https://github.com/mmcbride2929/poke-pet',
    id: '002',
  },
  {
    image: chucksTrucksImage,
    title: 'Chucks-Trucks',
    description:
      "Chuck's Trucks is a mock car dealership website built using the MERN stack and styled with Chakra UI. I built it as an opportunity to deepen my understanding of the MERN stack, and tried to have some fun while doing it. The website features an inventory of vehicles that can be sorted by price, miles, and year.",

    //  Through the development of this website, the importance of avoiding prop-drilling and the preservation of state immutability were key takeaways.

    demo: 'https://aesthetic-choux-7c3aff.netlify.app/',
    github: 'https://github.com/mmcbride2929/Chucks-Trucks-V3',
    id: '003',
  },
]

const Projects = () => {
  const [projects, setProjects] = useState(initialState)

  return (
    <Box
      display={{ xl: 'flex' }}
      alignItems={{ xl: 'flex-start' }}
      flexDirection={{ xl: 'row' }}
    >
      {projects.map((project) => {
        return <Project project={project} key={project.id} />
      })}
    </Box>
  )
}
export default Projects
