"use client";
import { motion, useInView } from "framer-motion";
import projects from "@/utils/utils";
import { GitHub, Language } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, scale: 0.5, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      rotate: [0, 0, 35, 40, 45, 50, -50, -45, -40, -35, 0, 0],
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.1 },
    },
  };

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <section id="projects" className="mx-auto pt-4 pb-10">
      <h3 className="text-5xl py-10 font-semibold text-center">
        <span className="border-b-4 border-primary-main">My Work</span>
      </h3>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8"
      >
        {projects.map((project, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={index}
            className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-4 relative transition-all overflow-hidden"
            onClick={onOpen}
            style={{ minHeight: "450px" }}
          >
            <div className="relative w-full h-52 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg border-2 border-gray-600 border-b-4"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h4 className="text-xl text-black dark:text-white font-semibold mb-2">
              {project.title}
            </h4>
            <p className="text-gray-500 min-h-[100px] mb-4">{project.body}</p>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex gap-3 md:gap-4 items-center justify-center flex-wrap">
                {project.chips.map((chip, index) => (
                  <Image
                    key={index}
                    src={chip.img}
                    alt=""
                    loading="lazy"
                    className="w-9 hover:scale-110 transition-all"
                    style={{ objectFit: 'contain' }}
                  />
                ))}
              </div>
            </div>
            <div
              className={
                project.images
                  ? "flex gap-1 absolute top-6 right-12 text-white"
                  : "flex gap-1 absolute top-6 right-6 text-white"
              }
            >
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center justify-center p-2 bg-black rounded-full hover:scale-110 transition-all"
                >
                  <GitHub className="text-2xl" />
                </Link>
              )}
              {project.preview && (
                <Link
                  href={project.preview}
                  target="_blank"
                  className="flex items-center justify-center p-2 bg-black rounded-full hover:scale-110 transition-all"
                >
                  <Language className="text-2xl" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;