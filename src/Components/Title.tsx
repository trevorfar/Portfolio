"use client"
import Link from "next/link"
import {
  CheckCircleOutline,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import gif from "../../public/DoneAnimation.gif"
import tinyresume from "../../public/tinyresume.png"
import TransparentButterfly from "../../public/FinalSecondTransparent.gif"

// import { TypeAnimation } from 'react-type-animation';

const socials = [
  {
    link: "https://github.com/trevorfar",
    icon: <GitHub className="text-3xl" />,
  },
  {
    link: "https://www.linkedin.com/in/trevor-farias",
    icon: <LinkedIn className="text-3xl" />,
  },
]

const Title = () => {
  const [showGif, setShowGif] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="title">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center gap-4 relative mb-16 pb-14 w-full "
      >
        <div className="flex flex-col">
          <Image
        
            className="pointer-events-none select-none"
            src={gif}
            alt="Trevor Farias"
            loading="lazy"
          />
          <h2 className="font-bold text-lg pb-2 mx-auto text-center">
            Web developer specializing in full-stack development
          </h2>
          <div className="border-primary-main border-b-2" />
        </div>

        <div className="text-left flex flex-row mx-4 md:mx-36 gap-4">
          <div className="flex flex-col w-36 h-42 border-2 border-black cursor-grab mr-4 mb-4">
            <Link href="https://drive.google.com/file/d/1NOynh7CxxGOVeZGklGqv5VZC1XMoteTt/view?usp=drive_link" target="_blank"><Image src={tinyresume} alt="resume" /> </Link>
            
          </div>  
          <div className="my-auto">
          {showGif && (
            <Link href="/#projects">
          <Image
            className=""
            src={TransparentButterfly}
            alt="Trevor Farias"
            loading="lazy"
          />
          </Link>
        )}
            <p>Available for internships throughout Canada and the US.</p>

            <div className="flex flex-row mx-auto justify-center items-center mt-2">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <div className="hover:text-gray-500 hover:scale-110 ">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      
        
      </motion.div>
    </section>
  )
}
export default Title
