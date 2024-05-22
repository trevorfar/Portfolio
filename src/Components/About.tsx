"use client";
import MaxWidthWrapper from "@/utils/MaxWidthWrapper";
import headshot from '../../public/Headshot.jpeg'
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, scale: 0.5, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <>
      <MaxWidthWrapper>
        <section id="about" className="w-9/12 mx-auto pt-4 pb-20">
          <div className="">
            <h3 className="text-4xl py-10 font-semibold text-center">
              <span className="border-b-4 border-primary-main">About</span>
            </h3>
            <div className="flex flex-col md:flex-row lg:flex-row gap-6 mb-12 ">
              <Image
                src={headshot}
                alt="profile_pic"
                className="rounded-full h-60 w-60 border-2 border-primary-main mx-auto justify-center align-items"
              />
              <div className="my-auto justify-center items-center text-center md:text-left">
                <p>
                  Hey, I&apos;m Trevor Farias, an aspiring Software engineer. I
                  am currently a third-year Computer Engineering student at
                  Queen&apos;s University in Ontario.
                </p>
                <p>
                  My passion for everything technology started when I got my
                  first shared-2DS in 2013. As a kid, video games were my
                  creative outlet, leading me to create and manage Minecraft
                  servers. I created custom plugins using Java and C, I was
                  challenged with the difficult task of making sure my community
                  was happy, while also creating fun and innovative updates.
                  Through this experience, I realized the significance of the
                  social aspect that lies beyond programming.
                </p>
              </div>
            </div>
            <section
              id="skills"
              className="grid md:grid-cols-2 grid-cols-1 pt-12 gap-16"
              ref={ref}
            >
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3 }}
              >
                <div className="">
                  <h3 className="text-3xl py-10 font-semibold text-center">
                    <span className="border-b-4 border-primary-main">
                      Frameworks/DB&apos;s
                    </span>
                  </h3>
                  <div className="flex gap-16 justify-center align-items">
                    <div className="flex-col">
                      <p className="text-lg">ReactJS</p>
                      <p className="text-lg">Flask</p>
                      <p className="text-lg">TailwindCSS</p>
                      <p className="text-lg">PostgreSQL</p>
                    </div>
                    <div className="flex-col">
                      <p className="text-lg">NextJS</p>
                      <p className="text-lg">Vue</p>
                      <p className="text-lg">MongoDB</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3 }}
              >
                <div className="">
                  <h3 className="text-3xl py-10 font-semibold text-center">
                    <span className="border-b-4 border-primary-main">
                      Languages
                    </span>
                  </h3>
                  <div className="flex gap-16 justify-center align-items">
                    <div className="flex-col">
                      <p className="text-lg">Java</p>
                      <p className="text-lg">C</p>
                      <p className="text-lg">JavaScript</p>
                      <p className="text-lg">SQL</p>
                    </div>
                    <div className="flex-col">
                      <p className="text-lg">Python</p>
                      <p className="text-lg">HTML</p>
                      <p className="text-lg">CSS</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default About;
