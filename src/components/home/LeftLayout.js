import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faThumbsUp
} from '@fortawesome/free-regular-svg-icons';

import { Table } from 'reactstrap';
import './LeftLayout.css';


export default class LeftLayout extends Component {
  render() {
    // const { rating } = this.state;

    return (
      <div className="left-container">
        <p>My skills part</p>
        <Table borderless>
          <thead>
            <tr>
              <th>Rating</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" >
                <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  renderStarIcon={() => <span><FontAwesomeIcon className='icon' icon={faThumbsUp}/></span>}
                  starCount={5}
                  value={4}
                />
              </th>
              <td>HTML/CSS/Bootstrap</td>
            </tr>
            <tr>
              <th scope="row">
                <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  renderStarIcon={() => <span><FontAwesomeIcon icon={faThumbsUp} className='icon'/></span>}
                  starCount={5}
                  value={3}
                />
              </th>
              <td>JavaScript</td>
            </tr>
            <tr>
              <th scope="row">
                <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  renderStarIcon={() => <span><FontAwesomeIcon icon={faThumbsUp} className='icon'/></span>}
                  starCount={5}
                  value={3}
                />
              </th>
              <td>React/React Native</td>
            </tr>
            <tr>
              <th scope="row">
                <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  renderStarIcon={() => <span><FontAwesomeIcon icon={faThumbsUp} className='icon'/></span>}
                  starCount={5}
                  value={3}
                />
              </th>
              <td>PHP</td>
            </tr>
            <tr>
              <th scope="row">
                <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  renderStarIcon={() => <span><FontAwesomeIcon icon={faThumbsUp} className='icon'/></span>}
                  starCount={5}
                  value={3}
                />
              </th>
              <td>SQL (MySQLWorkbench)</td>
              {/* <td>SQL (MySQLWorkbench,Docker,XAMPP/MAMP)</td> */}
            </tr>
          </tbody>
        </Table>

        <div className="familiar">
          <p>Familiar:</p>
          <ul>
            <li>Agile methodology (Scrum/Kanban)</li>
            <li>JIRA, Trello</li>
            <li>Git, GitHub, Bitbucket</li>
            <li>WordPress / WooCommerce / Magento 2</li>
          </ul>
        </div>

        <div className="language">
          <p>Languages:</p>
          <ul>
            <li>English - Fluent</li>
            <li>Swedish - Intermediate</li>
            <li>Ukrainian – Native</li>
            <li>Russian - Fluent</li>
          </ul>
        </div>
        
      </div>
    )
  }

}
