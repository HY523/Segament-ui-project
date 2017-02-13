import React, { Component } from 'react'
import '../App.css'
import { Menu, Segment, Button, Container, Icon} from 'semantic-ui-react'
export default class PointingMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary size='large'>
          <Container>
            <div className='toc_item'>
              <Menu.Item name='home' onClick={this.props.sideBarMenuPush}>
                <Icon disabled name='sidebar' link/>
              </Menu.Item>
            </div>
            <div className="pointing_menu">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
              <Menu.Item name='work' active={activeItem === 'work'} onClick={this.handleItemClick}/>
              <Menu.Item name='company' active={activeItem === 'company'} onClick={this.handleItemClick}/>
              <Menu.Item name='careers' active={activeItem === 'careers'} onClick={this.handleItemClick}/>
            </div>
            <div className="pointing_sign_menu">
              <Button inverted>Login</Button>
              <Button inverted>Sign Up</Button>
            </div>
          </Container>
        </Menu>
      </Segment>
    )
  }
}
