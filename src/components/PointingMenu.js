import React, { Component } from 'react'
import { Menu, Segment, Button, Container, Icon, Header} from 'semantic-ui-react'

export default class PointingMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Container>
            {/*
              <div>
                <Icon disabled name='sidebar'/>
              </div>
            */}
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='work' active={activeItem === 'work'} onClick={this.handleItemClick} />
            <Menu.Item name='company' active={activeItem === 'company'} onClick={this.handleItemClick} />
            <Menu.Item name='careers' active={activeItem === 'careers'} onClick={this.handleItemClick} />
          </Container>

          <Container>
            <Button inverted>Login</Button>
            <Button inverted>Sign Up</Button>
          </Container>
        </Menu>
      </Segment>
    )
  }
}
