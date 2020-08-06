import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';
import BusTicket from '../../assets/images/BusTicket/BusTicket1.png';
import OnlineShop from '../../assets/images/OnlineShop/OnlineShop1.png';
import Magento from '../../assets/images/Magento/Magento3.png';
import BookSystem from '../../assets/images/BookSystem/BookSystem2.png'


export default class MainContent extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="portfolio-list">

          <div className="portfolio-item">
            <Link className="link-item" to={`/portfolio/BusTicket`}>
              <div className="item-image" style={{ backgroundImage: `url(${BusTicket})`}}></div>
              <div className="item-name">
                <p>Bus Ticket system</p>
              </div>
            </Link>
          </div>

          <div className="portfolio-item">
            <Link className="link-item" to={`/portfolio/OnlineShop`}>
              <div className="item-image" style={{ backgroundImage: `url(${OnlineShop})`}}></div>
              <div className="item-name">
                <p>Online Shop</p>
              </div>
            </Link>
          </div>

          <div className="portfolio-item">
            <Link className="link-item" to={`/portfolio/Magento`}>
              <div className="item-image" style={{ backgroundImage: `url(${Magento})`}}></div>
              <div className="item-name">
                <p>Magento 2</p>
              </div>
            </Link>
          </div>

          <div className="portfolio-item">
            <Link className="link-item" to={`/portfolio/BookSystem`}>
              <div className="item-image" style={{ backgroundImage: `url(${BookSystem})`}}></div>
              <div className="item-name">
                <p>Book system</p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    )
  }

}
