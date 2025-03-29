import mongodb from "../../public/chips/mongodb.svg"
import react from "../../public/chips/react.svg"
import tailwind from "../../public/chips/tailwind.svg"
import postgres from "../../public/chips/postgres.svg"
import js from "../../public/chips/js.svg"
import digitalwebstore from "../../public/DigitalWebstore.png"
import portfolio_old from "../../public/oldsite.png"
import GeoGuess from "../../public/GeoGuess_BG.png"
import todo from "../../public/home.png"
import Typescript from "../../public/chips/Typescript.svg"
import flask from "../../public/chips/flask.svg"
import python from "../../public/chips/python-5.svg"
import Veloce from "../../public/Veloce.png"
import Timer from "../../public/timer.png"
import C_Server from "../../public/C_Server.png"
import WordMorph from "../../public/WordMorph.png"
import nextChip from "../../public/chips/nextjs-icon.svg"
import Redux from "../../public/chips/redux.svg"
import C from "../../public/chips/C.svg"


const projects = [
    {
    image: Timer,
    title: "Timer",
    body: "Simple study timer using Pexels video API for interesting backgrounds",
    chips: [
      {
        img: react,
      },
      {
        img: Typescript,
      },
      {
        img: tailwind,
      },
    ],
    images: null,
    preview: "https://timer.trevorfarias.com/",
    github: "https://github.com/trevorfar/timer",
  },
    {
    image: C_Server,
    title: "C-HTTP Server",
    body: "Lightweigt multi-threaded HTTP server created fully with C capable of processing (receiving, parsing, and serving) HTTP requests, and concurrent clients.",
    chips: [
      {
        img: C,
      },
    ],
    images: null,
    preview: null,
    github: "https://github.com/trevorfar/C_HTTP_Processor",
  },
    {
    image: Veloce,
    title: "Veloce",
    body: "Veloce is a sleek and dynamic car company website built with Next.js and TypeScript, designed to show automotive creations.",
    chips: [
      {
        img: react,
      },
      {
        img: Typescript,
      },
      {
        img: tailwind,
      },
    ],
    images: null,
    preview: "https://veloce.vercel.app/",
    github: "https://github.com/trevorfar/Veloce",
  },
    {
    image: WordMorph,
    title: "WordMorph",
    body: "Fun dynamic word game built using Redux & NextGS, only built for computer environments.",
    chips: [
      {
        img: react,
      },
      {
        img: Typescript,
      },
      {
        img: Redux,
      },
      {
        img: tailwind,
      },
    ],
    images: null,
    preview: "https://geo-morph.vercel.app/",
    github: "https://github.com/trevorfar/GeoMorph",
  },
  {
    image: GeoGuess,
    title: "GeoGuess",
    body: "Built using Redux & NextJS, GeoGuess features an interactive wordle-inspired country guessing game, all image vectorized with geojson",
    chips: [
      {
        img: nextChip,
      },
      {
        img: Redux,
      },
      {
        img: Typescript,
      },
      {
        img: tailwind,
      },
    ],
    images: null,
    preview: "https://country-game-alpha.vercel.app/",
    github: "https://github.com/trevorfar/CountryGame",
  },
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
    preview: null,
    github: "https://github.com/trevorfar/newWebstore",
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
    preview: "",
    github: "https://github.com/trevorfar/Portfolio_Site",
  },
]
export default projects
// TODO: ADD gallery photos etc so I can test
