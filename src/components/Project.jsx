import React from 'react'
import "../styles/project.css"
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({title,desc,techStack,gitHubLink})=>{
  return (
    <div className="project-card">
      <h3 className="title">{title}</h3>
      <p className="desc">
        {desc} 
      </p>
      <div className="tech-stack">
        {techStack.map(i=>(
          <p key={i}>{i}</p>
        ))}
      </div>
      <a href={gitHubLink} target='_blank'><FaGithub size={30} /></a>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects" id='projects'>
        <h2>Projects</h2>
        <div className="project-list">
          <ProjectCard 
            title={"Job-Connect"} 
            desc={"Built a full-stack job search application, Where Job seekers can search for jobs, and employers can post job listings"}
            techStack={["TypeScript","React","NodeJS","MongoDB"]}
            gitHubLink={"https://github.com/Pranav1703/Job-Connect"}
          />
          <ProjectCard
            title={"AnimeMangaScraper"}
            desc={"AnimeMangaScraper is a desktop application designed to srcap and display trending and latest info about manga and anime."}
            techStack={["TypeScript","React","Go"]}
            gitHubLink={"https://github.com/Pranav1703/Ani-manga_scraper"}
          />
          <ProjectCard
            title={"WeatherCLI"}
            desc={"command-line interface (CLI) tool developed in GoLang, designed to fetch real-time weather data from an API."}
            techStack={["Go"]}
            gitHubLink={"https://github.com/Pranav1703/Weather_CLI"}
          />
        </div>
    </div>
  )
}

export default Projects