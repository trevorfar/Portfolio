"use client"
import MaxWidthWrapper from "@/utils/MaxWidthWrapper";
import react from "../../public/chips/react.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <MaxWidthWrapper>
        <section id="about" className="w-9/12 mx-auto pt-12 pb-20">
          <div className="">
            <h3 className="text-5xl py-10 font-semibold text-center">
              <span className="border-b-4 border-primary-main">About</span>
            </h3>
            <div className="flex flex-row gap-6 mb-12">
              <Image
                src={react}
                alt="profile_pic"
                className="rounded-full h-52 w-52 border-4 border-gray-500"
              />
              <p className="my-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                similique autem debitis id tenetur unde quis non voluptas,
                delectus, consequatur accusantium dolorem necessitatibus animi
                qui optio repudiandae maxime blanditiis molestias.
              </p>
            </div>

            <motion.div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <div className="">
                <h3 className="text-4xl py-10 font-semibold text-center">
                  <span className="border-b-4 border-primary-main">
                    Frameworks
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
              <div className="">
                <h3 className="text-4xl py-10 font-semibold text-center">
                  <span className="border-b-4 border-primary-main">
                    Languages
                  </span>
                </h3>
                <div className="flex gap-16 justify-center align-items">
                  <div className="flex-col">
                    <p className="text-lg">Java</p>
                    <p className="text-lg">C</p>
                    <p className="text-lg">JavaScript</p>
                  </div>
                  <div className="flex-col">
                    <p className="text-lg">Python</p>
                    <p className="text-lg">HTML</p>
                    <p className="text-lg">CSS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default About;
