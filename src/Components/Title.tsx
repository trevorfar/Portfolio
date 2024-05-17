"use client"
import Link from "next/link";
import {
  CheckCircleOutline,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Button, buttonVariants } from "./ui/button";
import { motion } from "framer-motion";

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

const Title = () => {
  return (
    <section id="title">
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center gap-4 relative h-screen w-full">
      
        <h1 className="text-xl font-bold">Hi, I am</h1>
        <p className="text-5xl font-bold text-gradient text-center">
          Trevor Farias
        </p>
        <div className="flex flex-row gap-4 z-40 ">
          <Link className="btn-bordered" href="/#projects" target="_blank">
            Projects
          </Link>

          <Link className="btn-bordered" href="/#projects" target="_blank">
            Resum&eacute;
          </Link>
        </div>
        <div className="flex text-center justify-center mx-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            vel. Commodi aut ducimus natus iusto assumenda consequuntur soluta
            quia! Commodi vitae ipsum ab quasi culpa perferendis illo quia iusto
            natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nesciunt dicta placeat voluptates aliquam temporibus quo laborum.
            Corporis, rem ea? Totam eligendi delectus exercitationem vero modi,
            voluptatum qui autem minus quis!
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
              <div className="hover:text-gray-500 hover:scale-110 ">{social.icon}</div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Title;
