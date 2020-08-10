import React, {Component} from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Footer from './components/share/Footer';
import Header from './components/share/Header';
import Main from './components/Main';


class MyApp extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container-fluid">
          <Main />
        </div>
        <Footer />
      </div>
    )
  }

}

export default MyApp;
