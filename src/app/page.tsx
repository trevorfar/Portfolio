import About from "@/Components/About"
import Title from "@/Components/Title"
import Projects from "@/Components/Projects"
import GapComponent from "@/Components/Seperator"
import ContactMe from "@/Components/ContactMe"
import ParticleBackground from "@/Components/Particles"

const Page = () => {
  return (
    <div className="flex flex-col px-2.5 mx-auto w-full max-w-screen-xl md:px-20">
      <ParticleBackground />
      <Title />
      <About />
      <GapComponent>
        <Projects />
      </GapComponent>
      <ContactMe />
    </div>
  )
}

export default Page
