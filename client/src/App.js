import React from 'react';
import ReactPlayer from 'react-player'

import './App.css';

function App() {
  return (
    <div className='App'>
      <div>THE PAGE IS LOADING</div>
      <header className='App-header'>
        <ReactPlayer src='http://192.168.68.50:4000/video' type='video/mp4' controls/>
        {/* <video controls muted>
          <source src="http://192.168.68.50:4000/video" type='video/mp4'></source>
        </video> */}
      </header>
    </div>
  )
};

export default App;