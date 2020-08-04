import React from "react";
import LeftLayout from "./LeftLayout";
import MainContent from "./MainContent";

import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <LeftLayout />
      <MainContent />
    </div>
  );
}
