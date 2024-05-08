"use client"
import ProjectListing from "./ProjectListing";
import { GitHub, Language } from "@mui/icons-material"
import projects from "@/lib/utils/projectsList";

const Projects = () => {
  return (
   <section id="projects" className="">
    <h3 className="">
      <span>My Work</span>
    </h3>
    <div 
    // ref 
    className="">
    {projects.map((project, index) => (
      
    ))}
    </div>
   </section>
    
  ) 
}

export default Projects;
