import React from "react";

import './Footer.css';
import Social from "../lib/Social";
import BackgroundImg from '../../assets/unsplash2.jpg';

function MyFooter() {
  return (
    <div className="footer" style={{backgroundImage: "url(" + BackgroundImg + ")"}}>
      <Social />
      <div className="contact">
        <div>Volodymyr Avramenko ©2020</div>
      </div>
    </div>
  );
}

export default MyFooter;
