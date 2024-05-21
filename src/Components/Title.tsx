"use client";
import Link from "next/link";
import {
  CheckCircleOutline,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import Tester from '../../public/Tester.gif'
import Animation from "./Animation";
import Animator from "./Animator";
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
];
const frames = [
  '/animations/untitled0001.png',
  '/animations/untitled0002.png',
  '/animations/untitled0003.png',
  '/animations/untitled0004.png',
  '/animations/untitled0005.png',
  '/animations/untitled0006.png',
  '/animations/untitled0007.png',
  '/animations/untitled0008.png',
 
]

const Title = () => {
  return (
    <section id="title">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center gap-4 relative my-16 pb-14 w-full "
      >
        <div className="w-[350] h-[128]">
          <Animator frames={frames}  repeat={false}/>
            {/* <Image src={Tester} alt=""></Image> */}
          </div>
          
       
        <h1 className="text-xl font-bold">Hi, I am</h1>
        <p className="text-5xl font-bold text-gradient text-center">
          Trevor Farias
        </p>
        <div className="flex flex-row gap-4 z-40 ">
          <Link className="btn-bordered" href="/#projects">
            Projects
          </Link>

          <Link className="btn-bordered" href="https://drive.google.com/file/d/1NOynh7CxxGOVeZGklGqv5VZC1XMoteTt/view?usp=drive_link" target="_blank">
            Resum&eacute;
          </Link>
        </div>
        <div className="flex text-center justify-center mx-12">
        {/* <TypeAnimation
            sequence={[
              "FrontEnd Developer",
              1000,
              "Freelancer",
              1000,
              "React/Next Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-3xl md:text-4xl text-center "
          /> */}
          <p>
            An innovative programmer looking to transition from passion projects
            to professional. Entering my 3rd year of Computer Engineering at
            Queen&apos;s University. Available for internships throughout Canada and
            the US.
          </p>
        </div>
        <div className="flex flex-row">
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
      </motion.div>
    </section>
  );
};
export default Title;
