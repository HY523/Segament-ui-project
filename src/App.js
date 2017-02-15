import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import computeLayout from 'css-layout/dist/css-layout.min';

//import {Container, Header, Button, Image, Segment} from 'semantic-ui-react'
import TopPushMenu from './components/TopPushMenu'
import SideBarMenuPush from './components/SideBarMenuPush'
import ContentPush from './components/ContentPush'
import TopHiddenMenu from './components/TopHiddenMenu'

class App extends Component {

  render() {
    return (

      <div className="App">
        <div className="topHiddenMenu">
          <TopPushMenu/>
        </div>
      </div>
    );
  }
}

export default App;
