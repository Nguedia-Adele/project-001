import React from 'react';
import PanelGroup from 'react-panelgroup'

import MediaBrowser from './components/media-browser-container/MediaBrowser'
import MediaPlayer from './components/media-player-container/MediaPlayer'

import TimeLine from './components/tl-container/TimeLine'

import './App.css';

function App() {
  return (
    <div className="bg-dark h-100">
      <div style={{height:"380px"}}>
        <PanelGroup>
          <div className="overflowY" ><MediaBrowser/></div>
          <div><MediaPlayer/></div>
        </PanelGroup>
      </div>

      <div>
        <TimeLine/>
      </div>
    </div>
  );
}

export default App;
