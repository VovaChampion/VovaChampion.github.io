import React from "react";

import './Header.css';
import Social from "../lib/Social";

function Header() {
  return (
    <div className="header">
      <div className="contact">
        <div>My header</div>
      </div>
      <Social />
    </div>
  );
}

export default Header;
