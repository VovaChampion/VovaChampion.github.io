import React from "react";

import './Header.css';
import MyLogo from '../../assets/vova-avatar.jpg';
import Background from '../../assets/unsplash2.jpg';
import Social from "../lib/Social";
import Arrow from "../lib/Arrow";

var sectionStyle = {
  width:'100%',
  // minHeight: '500px',
  height:'100%',

  /* Create the parallax scrolling effect */
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  backgroundImage:`url(${Background})`
};

function Header() {
  return (
    <div style={ sectionStyle }>
      <div className="header">
        
        <div className="logo">
          <img src={MyLogo} alt="myphoto"/>
        </div>

        <div className="title">
          <p> FRONTEND / WEB / NATIVE / FULLSTACK DEVELOPER </p>
        </div>
        <Social />
        <Arrow />
      </div>
    
    </div>
  );
}

export default Header;
