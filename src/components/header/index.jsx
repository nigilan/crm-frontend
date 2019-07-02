import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../../logo.svg';
import ProfileButton from './profile_button';

export default class Header extends Component {
  render() {
    return (
      <Menu size="massive">
        <Menu.Item name="home">
          <img alt="logo" src={Logo} />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <ProfileButton />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
