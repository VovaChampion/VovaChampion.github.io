import React, {Component} from 'react';
import './App.css';

import Footer from './components/share/Footer';
import Header from './components/share/Header';
import Main from './components/Main';
// import LeftLayout from './components/home/LeftLayout';
// import MainContent from './components/home/MainContent';


class MyApp extends Component {
  render() {
    return (
      <div className="app" style={{fontFamily:"'Helvetica Neue', sans-serif"}}>
        <Header />
        <div className="container-fluid">
          <Main />
          {/* <LeftLayout />
          <MainContent />  */}
        </div>
        <Footer />
      </div>
    )
  }

}

export default MyApp;
