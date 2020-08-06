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

        <div className="contact">
          <ul>
            <li>Email: <a href="mailto:volodymyr.avramenko77@gmail.com">volodymyr.avramenko77@gmail.com</a></li>
            <li>Phone: +46-070-2688977</li>
          </ul>
        </div>
        <Social />
        <Arrow />
      </div>
    
    </div>
  );
}

export default Header;
