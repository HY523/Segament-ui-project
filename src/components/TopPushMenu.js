import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Header, Container } from 'semantic-ui-react'
import ContentPush from './ContentPush'
class TopPushMenu extends Component {
  state = { visible: false }

  toggleTopMenuVisibility = () => this.setState({ visible: !this.state.visible })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { visible } = this.state
    const { activeItem } = this.state
    return (
      <div>
        <Button onClick={this.toggleTopMenuVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' direction='top' visible={visible}>
              <Container>
                <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>

                <Menu.Item
                  name='work'
                  active={activeItem === 'work'}
                  onClick={this.handleItemClick}
                >
                  Work
                </Menu.Item>

                <Menu.Item
                  name='company'
                  active={activeItem === 'company'}
                  onClick={this.handleItemClick}
                >
                  Company
                </Menu.Item>

                <Menu.Item
                  name='careers'
                  active={activeItem === 'careers'}
                  onClick={this.handleItemClick}
                >
                  Careers
                </Menu.Item>
              </Container>

              <Container>
                <Menu.Item>
                  <Button>Log-in</Button>
                </Menu.Item>

                <Menu.Item>
                  <Button primary>Sign up</Button>
                </Menu.Item>
              </Container>
          </Sidebar>
          <Sidebar.Pusher>
            <ContentPush/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default TopPushMenu
