import React from 'react'
import "../styles/contact.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import fileDownload from "js-file-download"
import resumeFile from "../assets/resume.pdf"

const Contact = () => {

  const downloadResume = ()=>{
    fetch(resumeFile)
      .then((response)=>{
        
        response.blob().then((blob)=>{
          console.log(blob)
          fileDownload(blob,"Resume.pdf")
        })

      })
      .catch((err)=>console.log(err))
  }

  return (
    <div className="contact">
        <h2>Contact</h2>
        <div className="icons">
          <a href="https://github.com/Pranav1703" target='_blank'><FaGithub size={40} /></a>
          <a href="mailto:pranavsai2005@gmail.com"><TfiEmail size={40}/></a>
          <a href="https://www.linkedin.com/in/sai-pranav-a75006255/" target='_blank'><FaLinkedin size={40}/></a>
          <button onClick={downloadResume} className='resume-btn'>
            Resume
          </button>
          
        </div>
    </div>
  )
}

export default Contact