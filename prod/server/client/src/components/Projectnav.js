import React from 'react'
import logo from "../Images/logo.svg";
const Projectnav = () => {
    return (
        <div>
        <div className="navContainer">
          <div className="navLogoDiv">
            <img src={logo} className="logo" />
          </div>
          <div className="navDiv">
            <nav className="mainNav">
              <a href="">Home</a>
              <a href="">About Me</a>
              <a href="">My Work</a>
              <a href="">Contact Me</a>
            </nav>
          </div>
        </div>
        </div>
    )

}

export default Projectnav
