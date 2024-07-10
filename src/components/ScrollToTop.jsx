import React, { useEffect,useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import "../styles/scrollToTop.css"

const ScrollToTop = () => {

  const [visible,setVisible] =useState(false)

  useEffect(() => {
    const toggleVisibility = ()=> window.scrollY > 500? setVisible(true) : setVisible(false)
    window.addEventListener('scroll',toggleVisibility)

    return ()=> window.removeEventListener("scroll",toggleVisibility)
  }, [])
  

  return (
    <>
      {
        visible?(
          <div className="scroll">
            <a className='scroll-a' href="#top">
                <FaArrowCircleUp size={60}/>
            </a>
          </div>
        ):null
      
      }
    </>
  )
}

export default ScrollToTop