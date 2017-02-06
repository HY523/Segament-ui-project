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

        <TopPushMenu/>
        <SideBarMenuPush/>
        <div class="pusher" >
          <Segment inverted vertical style={{textAlign: 'center'}} >
            <Container>
              <PointingMenu/>
            </Container>
            <Container text>
              <Header as='h1' inverted>
                Imagine-a-Company
              </Header>

              <Header as='h2' inverted>
                Do whatever you want when you want to.
              </Header>
              <Button content='Get Started' icon='right arrow' labelPosition='right' color='blue' size='large'/>
            </Container>
          </Segment>

          <Segment vertical style={{textAlign: 'center', flex:1}}>
            <Grid stackable verticalAlign='middle' container>
                <Grid.Column width={8}>
                  <div style={{textAlign: 'left'}}>
                    <Header as='h3'>We Help Companies and Companions</Header>
                    <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                    <Header as='h3'>We Make Bananas That Can Dance</Header>
                    <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                  </div>
                </Grid.Column>

                <Grid.Column floated='right' width={6}>
                  <Image src={image1} size='large' bordered/>
                </Grid.Column>
            </Grid>

            <div class="row">
              <div class="center aligned column">
                <Button content='Check Them Out' size='large'/>
              </div>
            </div>
          </Segment>

          <Segment vertical quote style={{textAlign: 'center'}}>
            <Grid stackable columns={2} divided>
              <Grid.Column centered>
                <div class='column' style={{paddingTop: '5em', paddingBottom: '5em'}}>
                  <Header as='h3'>"What a Company"</Header>
                  <p>That is what they all say about us</p>
                </div>
              </Grid.Column>

              <Grid.Column>
                <div class="column" style={{paddingTop: '5em', paddingBottom: '5em'}}>
                  <Header as="h3">
                    "I shouldn't have gone with their competitor."
                  </Header>
                  <p>
                    <Image src={image2} size='mini' verticalAlign='middle' shape='circular'/><span> Nan</span> Chief Fun Officer Acme Toys
                  </p>
                </div>
              </Grid.Column>
            </Grid>
          </Segment>

          <Segment vertical>
            <Container text textAlign='left'>
              <Header as="h3">Breaking The Grid, Grabs Your Attention</Header>
              <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
              <Button content='Read More' size='large'/>
              <Divider horizontal>
                <Header as="h4">
                  <a href="#">Case Studies</a>
                </Header>
              </Divider>
              <Header as='h3'> Did We Tell You About Our Bananas? </Header>
              <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
              <Button content="I'am Still Quite Interested" size='large'/>
            </Container>
          </Segment>

          <Segment inverted vertical>
            <Container style={{textAlign: 'left'}}>
              <Grid>
                <Grid stackable columns={3}>
                  <Grid.Column width={3}>
                    <Header inverted as='h4'>About</Header>
                    <List inverted link>
                      <List.Item as='a'>Sitemap</List.Item>
                      <List.Item as='a'>Contact US</List.Item>
                      <List.Item as='a'>Religious Ceremonies</List.Item>
                      <List.Item as='a'>Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>

                  <Grid.Column width={3}>
                    <Header inverted as='h4'> Services </Header>
                    <List inverted link>
                      <List.Item as='a'>Banana Pre-Order</List.Item>
                      <List.Item as='a'>DNA FAQ</List.Item>
                      <List.Item as='a'>How To Access</List.Item>
                      <List.Item as='a'>Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>

                  <Grid.Column width={8}>
                    <Header inverted as='h4'> Footer Header </Header>
                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                  </Grid.Column>
                </Grid>
              </Grid>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}

export default App;
