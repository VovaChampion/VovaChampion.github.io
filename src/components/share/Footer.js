import React from "react";

import './Footer.css';
import Social from "../lib/Social";

function MyFooter() {
  return (
    <div className="footer">
      <div className="contact">
        <div>My footer</div>
      </div>
      <Social />
    </div>
  );
}

export default MyFooter;
