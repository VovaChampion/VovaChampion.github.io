import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Table } from "reactstrap";
import { skils } from '../lib/Data';
import "./LeftLayout.css";

export default class LeftLayout extends Component {
  render() {
    const listItems = skils.map((item) => (
      <tr key={item.id}>
        <th scope="row">
          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => (
              <span>
                <FontAwesomeIcon className="icon" icon={faThumbsUp} />
              </span>
            )}
            starCount={5}
            value={item.value}
          />
        </th>
        <td>{item.label}</td>
      </tr>
    ));

    return (
      <div className="left-container">
        <p>My skills</p>
        <Table borderless>
          <thead>
            <tr>
              <th>Rating</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>{skils && <>{listItems}</>}</tbody>
        </Table>

        <div className="familiar">
          <p>Familiar:</p>
          <ul>
            <li>Agile methodology (Scrum/Kanban)</li>
            <li>JIRA, Trello, ClickUp</li>
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
          </ul>
        </div>
      </div>
    );
  }
}
