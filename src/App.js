import React from 'react';
import PanelGroup from 'react-panelgroup'

import MediaBrowser from './components/media-browser-container/MediaBrowser'
import MediaPlayer from './components/media-player-container/MediaPlayer'

import './App.css';

function App() {
  return (
    <div className="bg-dark">
      <div style={{height:"350px"}}>
        <PanelGroup>
          <div className="overflowY" style={{minWidth:"700px"}} >
            <MediaBrowser/>
          </div>

          <div style={{minWidth:"700px"}}><MediaPlayer/></div>
        </PanelGroup>
      </div>
      <div>new div</div>
    </div>
  );
}

export default App;
