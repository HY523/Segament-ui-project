import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import computeLayout from 'css-layout/dist/css-layout.min';
import $ from 'jquery';

//import {Container, Header, Button, Image, Segment} from 'semantic-ui-react'
import TopPushMenu from './components/TopPushMenu'
import SideBarMenuPush from './components/SideBarMenuPush'
import ContentPush from './components/ContentPush'
import TopHiddenMenu from './components/TopHiddenMenu'

class App extends Component {
  state = {visible: false}

  componentDidMount() {
    $(window).scroll((event) => {
        var scroll = $(window).scrollTop();
        if (scroll > 700){
          console.log("OK");
          this.setState({visible: true});
        }
        else {
          this.setState({visible: false});
        }
    });
  }

  render() {
    const { visible } = this.state;
    return (

      <div className="App">
        <div className="topHiddenMenu">
          { visible && <TopHiddenMenu/> }
        </div>
        <SideBarMenuPush/>
      </div>
    );
  }
}

export default App;
