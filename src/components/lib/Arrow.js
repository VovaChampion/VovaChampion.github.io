import React from "react";

import "./Arrow.css";

export default function Arrow() {
  return (
    // the link moves to the top of the LeftLayout
    <div className="go-to-skills-wrapper">
      <a href="#skills" className="go-to-skills-link">
        
        {/* the arrow */}
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
