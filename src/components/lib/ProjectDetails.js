import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProjectImages from './ProjectImages';
import './ProjectDetails.css';


export default class ProjectDetails extends Component {
  render() {

  const { project } = this.props;

    return (
      <div className="portfolio-item">
        
        <div className="image-block">
          <ProjectImages param={project.image}/>
        </div>

        <div className="desc">  

          <div className="item-name">
            <p>{project.name}</p>
          </div>

          <div className="item-description">
            <p>Description: </p>
            <p>{project.description}</p>
          </div>

          <div className="item-tools">
            <p>Tools:</p>
            {/* Loop all tools from the object's array  */}
            {project.tools.map((tool, i) => <li key={i}>{tool}</li>)}
          </div>

          {/* Link opens in new tab -> target="_blank"*/}
          <div className="item-link">
            <p>Git/web-page: <a href={project.git} target="_blank" rel="noopener noreferrer">Link</a></p>
          </div>
        </div>

      </div>
    )
  }

}
