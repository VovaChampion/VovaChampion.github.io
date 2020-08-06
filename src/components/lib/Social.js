import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faStackOverflow,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

import "./Social.css";

export default function Social() {
  return (
    <div className="social-links">
        <a href="https://www.linkedin.com/in/volodymyr-avramenko-b9762417/" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/VovaChampion"className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://stackoverflow.com/users/7085547/vova?tab=profile" className="stackoverflow social">
          <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100005875266522" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
    </div>
  );
}
