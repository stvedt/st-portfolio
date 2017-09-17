import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import '../css/mui-icon-custom.css';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
const styles = {
  button: {
    margin: 12,
  }
}

const NavBar = () => {
  return (
    <Toolbar>
      <ToolbarTitle text="Stephen Tvedt" />
      <ToolbarGroup>
        <RaisedButton
          href="https://github.com/stvedt"
          target="_blank"
          label="Github Link"
          style={styles.button}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
        />
        <RaisedButton
          href="https://github.com/stvedt"
          target="_blank"
          label="Resume/CV"
          download
          style={styles.button}
          icon={<FontIcon className="material-icons">file_download</FontIcon>}
        />
      </ToolbarGroup>
    </Toolbar>
  )
}

export default NavBar;
