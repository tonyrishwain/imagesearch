import React, {Component} from 'react';
import NavBar from './components/NavBar'
import ImgSearch from './components/ImgSearch'
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <ImgSearch />
      </div>
    )
  }
}

export default App;
