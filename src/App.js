import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import computeLayout from 'css-layout/dist/css-layout.min';

import {Container, Header, Menu, Button, Image, Icon, Segment, Grid, List, Divider} from 'semantic-ui-react'
import TopPushMenu from './TopPushMenu'
import PointingMenu from './PointingMenu'
import SideBarMenuPush from './SideBarMenuPush'
import image1 from './assets/images/wireframe/white-image.png'
import image2 from './assets/images/avatar/nan.jpg'

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

        <div className="ui vertical inverted sidebar menu">
          <a className="active item">Home</a>
          <a className="item">Work</a>
          <a className="item">Company</a>
          <a className="item">Careers</a>
          <a className="item">Login</a>
          <a className="item">Signup</a>
        </div>

{/*
        <TopPushMenu/>
        <SideBarMenuPush/>
*/}

        <div className="pusher">
          <Segment className="ui inverted vertical masthead center aligned">

            <Container>
{/*
              <div className="ui large secondary inverted pointing menu">
                <a className="toc item">
                  <i className="sidebar icon"></i>
                </a>
                <a className="active item">Home</a>
                <a className="item">Work</a>
                <a className="item">Company</a>
                <a className="item">Careers</a>
                <div className="right item">
                  <a className="ui inverted button">Log in</a>
                  <a className="ui inverted button">Sign Up</a>
                </div>
              </div>
*/}
              <PointingMenu/>
            </Container>

            <Container text>
              <Header as="h1" inverted>
                Imagine-a-Company
              </Header>
              <Header as="h2" inverted>Do whatever you want when you want to.</Header>
              <Button content='Get Started' icon='right arrow' labelPosition='right' color='blue' size='huge'/>
            </Container>
          </Segment>

          <Segment vertical className="stripe">
            <Container className="stackable">
              <div className="row">
                <div className="help_company">
                  <Header as="h3">We Help Companies and Companions</Header>
                  <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                  <Header as="h3">We Make Bananas That Can Dance</Header>
                  <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                </div>
                <div className="company_imageView">
                  <Image src={image1} size="large" bordered className="company_image"/>
                </div>
              </div>
              <div className="row">
                <div className="checkButton">
                  <Button size="huge">Check Them Out</Button>
                </div>
              </div>
            </Container>
          </Segment>


          <Segment className="ui vertical stripe quote">
            <div className="ui equal width stackable internally celled grid">
              <div className="center aligned row">
                <div className="column">
                  <Header as="h3">"What a Company"</Header>
                  <p>That is what they all say about us</p>
                </div>
                <div className="column">
                  <Header as="h3">"I shouldn't have gone with their competitor."</Header>
                  <p>
                    <Image src={image2} shape="circular" size="mini" verticalAlign="middle"/> <span>Nan</span> Chief Fun Officer Acme Toys
                  </p>
                </div>
              </div>
            </div>
          </Segment>

          <Segment className="ui vertical stripe">
            <Container text>
              <Header as="h3">Breaking The Grid, Grabs Your Attention</Header>
              <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
              <Button size="large">Read More</Button>
              <Header as="h4" className="ui horizontal header divider">
                <a href="#">Case Studies</a>
              </Header>
              <Header as="h3">Did We Tell You About Our Bananas?</Header>
              <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
              <Button size="large">I'm Still Quite Interested</Button>
            </Container>
          </Segment>


          <Segment inverted vertical>
            <Container>
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  <Header as="h4" inverted>About</Header>
                  <div className="ui inverted link list">
                    <a href="#" className="item">Sitemap</a>
                    <a href="#" className="item">Contact Us</a>
                    <a href="#" className="item">Religious Ceremonies</a>
                    <a href="#" className="item">Gazebo Plans</a>
                  </div>
                </div>
                <div className="three wide column">
                  <Header as="h4" inverted>Services</Header>
                  <div className="ui inverted link list">
                    <a href="#" className="item">Banana Pre-Order</a>
                    <a href="#" className="item">DNA FAQ</a>
                    <a href="#" className="item">How To Access</a>
                    <a href="#" className="item">Favorite X-Men</a>
                  </div>
                </div>
                <div className="seven wide column">
                  <Header as="h4" inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
              </div>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}


export default App;
