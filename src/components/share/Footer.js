import React from "react";

import './Footer.css';
import Social from "../lib/Social";
import BackgroundImg from '../../assets/unsplash2.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

function MyFooter() {
  return (
    <div className="footer" style={{backgroundImage: "url(" + BackgroundImg + ")"}}>
      <Social />
      <div className="contact">
        <p>Contact me via LinkedIn <FontAwesomeIcon className='icon' icon={faHandshake}/></p>
        <p>Volodymyr Avramenko ©2020</p>
      </div>
    </div>
  );
}

export default MyFooter;
