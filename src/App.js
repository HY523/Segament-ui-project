import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import computeLayout from 'css-layout/dist/css-layout.min';

import {Container, Header, Button, Image, Segment} from 'semantic-ui-react'
import TopPushMenu from './components/TopPushMenu'
import SideBarMenuPush from './components/SideBarMenuPush'
import ContentPush from './components/ContentPush'
import TopHiddenMenu from './components/TopHiddenMenu'


class App extends Component {
  render() {
    return (

      <div className="App">
        {/*<div className="ui large top fixed hidden menu">
          <div className="ui container">
            <a className="active item">Home</a>
            <a className="item">Work</a>
            <a className="item">Company</a>
            <a className="item">Careers</a>
            <div className="right menu">
              <div className="item">
                <a className="ui button">Log in</a>
              </div>
              <div className="item">
                <a className="ui primary button">Sign Up</a>
              </div>
            </div>
          </div>
        </div>*/}



{/*
        <div className="ui vertical inverted sidebar menu">
          <a className="active item">Home</a>
          <a className="item">Work</a>
          <a className="item">Company</a>
          <a className="item">Careers</a>
          <a className="item">Login</a>
          <a className="item">Signup</a>
        </div>
        <TopPushMenu/>

*/}
        <TopHiddenMenu/>
        <SideBarMenuPush/>
      </div>
    );
  }
}


export default App;
