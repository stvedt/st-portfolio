import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import '../css/mui-icon-custom.css';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
const styles = {
  button: {
    margin: 12,
  }
}

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
        <Toolbar>
          <div className="hidden-md-up">
            <RaisedButton
              label="Toggle Drawer"
              onClick={this.handleToggle}
            />
          </div>
          <ToolbarTitle text="Stephen Tvedt" />
          <ToolbarGroup className="hidden-md-down">
            <RaisedButton
              href="https://github.com/stvedt"
              target="_blank"
              label="Github"
              style={styles.button}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
            <RaisedButton
              href="https://github.com/stvedt"
              target="_blank"
              label="Resume"
              download
              style={styles.button}
              icon={<FontIcon className="material-icons">file_download</FontIcon>}
            />
          </ToolbarGroup>
        </Toolbar>
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default NavBar;
