import React from 'react'
import "../styles/header.css"

const Header = () => {
  return (
    <div className="header">
        <h3><a href="#top">SP.</a></h3>
        <div className="navbar">
          <div className="list">
            <a href='#about'>projects</a>
            <a href='#skills'>skills</a>
            <a href='#contact'>contact</a>
          </div>
        </div>
    </div>
  )
}

export default Header

