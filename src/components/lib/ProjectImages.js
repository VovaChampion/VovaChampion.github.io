import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProjectImages.css';

function importAll(r) {
  return r.keys().map(r);
}

const busTicket = importAll(require.context('../../assets/images/BusTicket', false, /\.(png|jpe?g|svg)$/));
const onlineShop = importAll(require.context('../../assets/images/OnlineShop', false, /\.(png|jpe?g|svg)$/));
const bookSystem = importAll(require.context('../../assets/images/BookSystem', false, /\.(png|jpe?g|svg)$/));
const magento = importAll(require.context('../../assets/images/Magento', false, /\.(png|jpe?g|svg)$/));
const smartWallet = importAll(require.context('../../assets/images/SmartWallet', false, /\.(png|jpe?g|svg)$/));
const pastebill = importAll(require.context('../../assets/images/Pastebill', false, /\.(png|jpe?g|svg)$/));

export default class ProjectImages extends Component {

  selectFolder(param) {
    switch(param) {
      case 'busTicket':
        return busTicket;
      case 'onlineShop':
        return onlineShop;
      case 'bookSystem':
        return bookSystem;
      case 'magento':
        return magento;
      case 'pastebill':
        return pastebill;
      default:
        return smartWallet ;
    }
  }

  render() {
    return (
      <div className="item-images">
        <Carousel showArrows={true} showThumbs={true} >
          {this.selectFolder(this.props.param).map((image, index) => {
            return (
              <div className="image-block-small" key={index}>
                <img src={image} alt=""/>
              </div>
              )
            })
          } 
        </Carousel>         
      </div>
    )
  }
}
