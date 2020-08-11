import React, {Component, Suspense} from 'react';
import './MainContent.css';
import { myProjects } from '../lib/Projects';
import ProjectDetails from '../lib/ProjectDetails';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHandPointUp
} from '@fortawesome/free-solid-svg-icons';


export default class MainContent extends Component {

  render() {

  const projects = myProjects.map((project, i) => 
    <ProjectDetails key={project.id} project={project} />)

    return (
      <div className="main-container">
                
        <div className="back-to-top-wrapper">
          <a href="#top" className="back-to-top-link"><FontAwesomeIcon className='icon' icon={faHandPointUp}/></a>
        </div>

        <div className="portfolio-list">
          <Suspense fallback={<div>Loading...</div>}>
            {projects}
          </Suspense>
        </div>

      </div>
    )
  }
}
