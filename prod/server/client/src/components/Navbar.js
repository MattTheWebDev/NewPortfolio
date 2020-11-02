import React from "react";
import logo from "../Images/logo.svg";
import Mobile from '../Images/MobileImage.svg'
import Tablet from '../Images/TabletImage.svg'
import webImage from '../Images/WebImage.svg'
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navContainer">
          <div className="navLogoDiv">
            <img src={logo} className="logo" alt='logo' />
          </div>
          <div className="navDiv">
            <nav className="mainNav">
              <a>Home</a>
              <a>About Me</a>
              <a>My Work</a>
              <a>Contact Me</a>
            </nav>
          </div>
        </div>
        <div className="headerWrapper">
          <div className="headerElements">
            <div className="headerText headerItem">
              <h1>Hi,</h1>
              <h1>I'm Matt.</h1>
              <h1>I build cool things.</h1>
            </div>
            <div className="headerImages headerItem">
              <div className="headerImgCont">
                <img className='headerImg'src={Tablet} alt='' />
                
              </div>
              <div className="headerImgCont">
                <img className='headerImg' src={webImage} alt=''/>
              
              </div>
              <div className="headerImgCont">
                <img className='headerImg' src={Mobile}  alt=''/>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
