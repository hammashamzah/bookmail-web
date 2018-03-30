import React, { Component } from 'react';
import './style.css';
import {Header, Footer, Content} from '../Layouts';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
