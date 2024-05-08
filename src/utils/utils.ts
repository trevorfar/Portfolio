import mongodb from '../../public/chips/mongodb.svg'
import react from '../../public/chips/react.svg'
import tailwind from '../../public/chips/tailwind.svg'
import js from '../../public/chips/js.svg'

const projects = [
    {
      image: "MAIN IMAGE HERE",
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
      images: "gallery",
      github: "",
    }
]
export default projects
// TODO: ADD gallery photos etc so I can test