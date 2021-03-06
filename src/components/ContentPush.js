import React, { Component } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
//import computeLayout from 'css-layout/dist/css-layout.min';

import {Container, Header, Button, Image, Segment, Divider, List} from 'semantic-ui-react'
import image1 from '../assets/images/wireframe/white-image.png'
import image2 from '../assets/images/avatar/nan.jpg'

import PointingMenu from './PointingMenu'

export default class ContentPush extends Component {

  render() {
    return (

      <div className="ContentPush">

        <div className="pusher">
          <Segment inverted vertical className="masthead">

            <Container>
              <PointingMenu className="pointing_menu" sideBarMenuPush={this.props.sideBarMenuPush}/>
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
                  <p>Yes that is right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
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
          </Segment>

          <Segment className="ui vertical stripe">
            <Container text>
              <Header as="h3">Breaking The Grid, Grabs Your Attention</Header>
              <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
              <Button size="large">Read More</Button>
              <Divider horizontal>
                <Header as="h4" className="horizontal_divider">CASE STUDIES</Header>
              </Divider>
              <Header as="h3">Did We Tell You About Our Bananas?</Header>
              <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
              <Button size="large">I am Still Quite Interested</Button>
            </Container>
          </Segment>

          <Segment inverted vertical style={{padding:'5em'}}>
            <Container>
              <div className="footer_list">
                <div className="footer_about_row">
                  <Header as="h4" inverted>About</Header>
                  <List inverted link>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Cazebo Plans</List.Item>
                  </List>
                </div>

                <div className="footer_service_row">
                  <Header as="h4" inverted>Services</Header>
                  <List inverted link>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How to Access</List.Item>
                    <List.Item as='a'>Favorite</List.Item>
                  </List>
                </div>

                <div className="footer_header_row">
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
