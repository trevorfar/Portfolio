import About from "@/Components/About"
import Title from "@/Components/Title"
import Projects from "@/Components/Projects"
import Contact from "@/Components/Contact"



const Page = () =>{
return (
  <>
  <div className="flex flex-col px-2.5 mx-auto w-full max-w-screen-xl md:px-20">
  <Title />
  <About />
  <Projects />
  <Contact />
  
  </div>
  </>
)
}

export default Page