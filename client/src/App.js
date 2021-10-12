import React, {Component} from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <h1>Welcome to my page!</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
