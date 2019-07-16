import React from 'react';
import PanelGroup from 'react-panelgroup'

import MediaBrowser from './components/media-browser-container/MediaBrowser'

import './App.css';

function App() {
  return (
    <div>
      <MediaBrowser/>
      <PanelGroup borderColor="grey">
        <div>panel 1</div>
        <div>panel 2</div>
      </PanelGroup>
    </div>
  );
}

export default App;
