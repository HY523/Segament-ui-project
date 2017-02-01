import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div class="ui large top fixed hidden menu">
          <Container>
            <a class="active item">Home</a>
            <a class="item">Work</a>
            <a class="item">Company</a>
            <a class="item">Careers</a>
            <div class="right menu">
              <div class="item">
                <a class="ui button">Log in</a>
              </div>
              <div class="item">
                <a class="ui primary button">Sign Up</a>
              </div>
            </div>
          </Container>
        </div>


        <div class="ui vertical inverted sidebar menu">
          <a class="active item">Home</a>
          <a class="item">Work</a>
          <a class="item">Company</a>
          <a class="item">Careers</a>
          <a class="item">Login</a>
          <a class="item">Signup</a>
        </div>



        <div class="pusher">
          <div class="ui inverted vertical masthead center aligned segment">

            <Container>
              <div class="ui large secondary inverted pointing menu">
                <a class="toc item">
                  <i class="sidebar icon"></i>
                </a>
                <a class="active item">Home</a>
                <a class="item">Work</a>
                <a class="item">Company</a>
                <a class="item">Careers</a>
                <div class="right item">
                  <a class="ui inverted button">Log in</a>
                  <a class="ui inverted button">Sign Up</a>
                </div>
              </div>
            </Container>

            <Container text>
              <h1 class="ui inverted header">
                Imagine-a-Company
              </h1>
              <h2>Do whatever you want when you want to.</h2>
              <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
            </Container>

          </div>


          <div class="ui vertical stripe segment">
            <Container text>
              <h3 class="ui header">Breaking The Grid, Grabs Your Attention</h3>
              <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
              <a class="ui large button">Read More</a>
              <h4 class="ui horizontal header divider">
                <a href="#">Case Studies</a>
              </h4>
              <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
              <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
              <a class="ui large button">I'm Still Quite Interested</a>
            </Container>
          </div>


          <div class="ui inverted vertical footer segment">
            <Container>
              <div class="ui stackable inverted divided equal height stackable grid">
                <div class="three wide column">
                  <h4 class="ui inverted header">About</h4>
                  <div class="ui inverted link list">
                    <a href="#" class="item">Sitemap</a>
                    <a href="#" class="item">Contact Us</a>
                    <a href="#" class="item">Religious Ceremonies</a>
                    <a href="#" class="item">Gazebo Plans</a>
                  </div>
                </div>
                <div class="three wide column">
                  <h4 class="ui inverted header">Services</h4>
                  <div class="ui inverted link list">
                    <a href="#" class="item">Banana Pre-Order</a>
                    <a href="#" class="item">DNA FAQ</a>
                    <a href="#" class="item">How To Access</a>
                    <a href="#" class="item">Favorite X-Men</a>
                  </div>
                </div>
                <div class="seven wide column">
                  <h4 class="ui inverted header">Footer Header</h4>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
