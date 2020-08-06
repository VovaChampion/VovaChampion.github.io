import React, {Component} from 'react';
import './App.css';

import Footer from './components/share/Footer';
import Header from './components/share/Header';
import Main from './components/Main';


class MyApp extends Component {
  render() {
    return (
      <div className="app">
        {/* <div className="app" style={{fontFamily:"'Helvetica Neue', sans-serif"}}> */}
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
