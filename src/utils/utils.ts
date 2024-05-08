import mongodb from '../../public/chips/mongodb.svg'
import react from '../../public/chips/react.svg'
import tailwind from '../../public/chips/tailwind.svg'
import js from '../../public/chips/js.svg'

const projects = [
    {
      image: react,
      title: "Digital Webstore - E-Commerce",
      body: "Fullstack development of a fully interactional digital marketplace",
      chips: [
        {
          img: mongodb,
        },
        {
          img: js,
        },
        {
          img: react,
        },
        {
          img: tailwind,
        },
      ],
      images: null,
      preview: "#",
      github: "https://github.com/trevorfar/newWebstore",
    }
]
export default projects
// TODO: ADD gallery photos etc so I can test