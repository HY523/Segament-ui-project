import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import computeLayout from 'css-layout/dist/css-layout.min';
import $ from 'jquery';

import SideBarMenuPush from './components/SideBarMenuPush'
import TopHiddenMenu from './components/TopHiddenMenu'

class App extends Component {
  state = {visible: false}

  componentDidMount() {

    $(window).scroll((event) => {
        var $div = $(".masthead");
        var divBottom = $div.offset().top + parseInt($div.height())

        var scroll = $(window).scrollTop();
        if (scroll > divBottom){

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
