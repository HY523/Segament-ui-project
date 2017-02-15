import React, { Component } from 'react'
import '../App.css'
import { Sidebar, Segment, Button, Menu, Container } from 'semantic-ui-react'
import ContentPush from './ContentPush'
import SideBarMenuPush from './SideBarMenuPush'

export default class TopPushMenu extends Component {
  state = { visible: false, activeItem: 'home' }
  toggleTopMenuVisibility = () => this.setState({ visible: !this.state.visible })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { visible, activeItem } = this.state
    return (
      <div>
        <Button onClick={this.toggleTopMenuVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' direction='top' visible={visible}>
            <Container>
              <Menu size='large'>
                <Container>
                  <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                  <Menu.Item name='work' active={activeItem === 'work'} onClick={this.handleItemClick}/>
                  <Menu.Item name='company' active={activeItem === 'company'} onClick={this.handleItemClick}/>
                  <Menu.Item name='careers' active={activeItem === 'careers'} onClick={this.handleItemClick}/>

                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <Button>Log-in</Button>
                    </Menu.Item>

                    <Menu.Item>
                      <Button primary>Sign up</Button>
                    </Menu.Item>
                  </Menu.Menu>
                </Container>
              </Menu>
            </Container>

          </Sidebar>
          <Sidebar.Pusher>
            <SideBarMenuPush/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
