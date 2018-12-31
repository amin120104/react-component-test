import React, { Component } from 'react';

//component import
import Table from './components/Table';
import MobileMenu from './components/navbar/MobileMenu';

//style add
import './styles/App.css';
import VideoPlayer from './components/videoplayer/VideoPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <MobileMenu />
          <Table />
          <VideoPlayer />
        </div>
      </div>
    );
  }
}

export default App;
