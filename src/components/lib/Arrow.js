import React from "react";

import "./Arrow.css";

export default function Arrow() {
  return (
    <div className="go-to-skills-wrapper">
      <a href="#skills" className="go-to-skills-link">
        
        <div className="indicator">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </a>
    </div>
  );
}
