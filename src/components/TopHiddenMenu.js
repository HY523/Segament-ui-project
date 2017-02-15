import React, { Component } from 'react'
import { Menu, Container, Button, Segment} from 'semantic-ui-react'
import '../App.css'

export default class TopHiddenMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
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
    )
  }
}
