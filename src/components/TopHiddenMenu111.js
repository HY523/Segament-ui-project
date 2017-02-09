import React, { Component } from 'react'
import { Menu, Container, Button, Segment} from 'semantic-ui-react'

export default class TopHiddenMenu111 extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
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
      </Menu>
    )
  }
}
