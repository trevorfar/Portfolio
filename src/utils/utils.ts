import mongodb from '../../public/chips/mongodb.svg'
import react from '../../public/chips/react.svg'
import tailwind from '../../public/chips/tailwind.svg'
import postgres from '../../public/chips/postgres.svg'
import js from '../../public/chips/js.svg'
import digitalwebstore from '../../public/DigitalWebstore.png'
import portfolio_old from '../../public/oldsite.png'
import todo from '../../public/home.png'
import Typescript from '../../public/chips/Typescript.svg'
import flask from '../../public/chips/flask.svg'
import python from '../../public/chips/python-5.svg'


const projects = [
    {
      image: digitalwebstore,
      title: "Digital Webstore - E-Commerce",
      body: "Fullstack development of a fully interactional digital marketplace. Authenticated & backed by payload CMS.",
      chips: [
        {
          img: react,
        },
        {
          img: mongodb,
        },
        {
          img: Typescript,
        },
      
        {
          img: tailwind,
        },
      ],
      preview: "https://digitalwebstore-production.up.railway.app",
      github: "https://github.com/trevorfar/newWebstore",
    },

    {
      image: todo,
      title: "To-Do Application",
      body: "To-do list app backed my PostgreSQL in junction with JWC to allow for dynamic storage user authentication",
      chips: [
        {
          img: react,
        },
        {
          img: postgres,
        },
        {
          img: Typescript,
        },
      ],
      images: null,
      github: "https://github.com/trevorfar/To-Do_list",
    },
    {
      image: portfolio_old,
      title: "Portfolio (old)",
      body: "Devloped a portfolio site using Flask, custom user authentication backed by postgres with various mini-projects",
      chips: [
        {
          img: python,
        },
        {
          img: flask,
        },
        {
          img: postgres,
        },
      ],
      images: null,
      preview: "https://trevorfarias.com",
      github: "https://github.com/trevorfar/Portfolio_Site",
    }
]
export default projects
// TODO: ADD gallery photos etc so I can test