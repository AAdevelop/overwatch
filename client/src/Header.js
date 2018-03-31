import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles = {
    marginTop: 15
};
class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
        <Menu style={styles}>
        <Menu.Item
          as={Link}
          to='/tracking'  
          name='tracking'
          active={activeItem === 'tracking'}
          onClick={this.handleItemClick}
        >
          Tracking
        </Menu.Item>

        <Menu.Item
          as={Link}
          to='/add'
          name='add'
          active={activeItem === 'add'}
          onClick={this.handleItemClick}
        >
          Add
        </Menu.Item>
        </Menu>
    );
  }
}

export default App;
