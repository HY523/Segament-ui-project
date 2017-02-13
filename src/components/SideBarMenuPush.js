import React, { Component } from 'react'
import '../App.css'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import ContentPush from './ContentPush'

export default class SidebarPushMenu extends Component {
  state = { visible: false }
  sideBarVisibility = () => this.setState({ visible: !this.state.visible })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem, visible } = this.state
      //console.log('KKKK', toggleSideBarVisibility)
    return (

      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} vertical inverted>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
            <Menu.Item name='work' active={activeItem === 'work'} onClick={this.handleItemClick}/>
            <Menu.Item name='company' active={activeItem === 'company'} onClick={this.handleItemClick}/>
            <Menu.Item name='carreers' active={activeItem === 'careers'} onClick={this.handleItemClick}/>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}/>
          </Sidebar>
          <Sidebar.Pusher>
            <ContentPush sideBarMenuPush={this.sideBarVisibility.bind(this)}/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
