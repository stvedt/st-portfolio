import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import '../css/mui-icon-custom.css';
const styles = {
  button: {
    margin: '0px 12px',
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
      <nav className="navbar navbar-light bg-faded">
        <div className="container">
          <a className="navbar-brand" href="/">
            Stephen Tvedt
          </a>
          <div className="navbar-right">
            <RaisedButton
              href="https://github.com/stvedt"
              target="_blank"
              label="Github"
              style={styles.button}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
            <RaisedButton
              href={process.env.PUBLIC_URL +'/files/Stephen-Tvedt-Resume-2017.pdf'}
              label="Resume"
              download
              style={styles.button}
              icon={<FontIcon className="material-icons">file_download</FontIcon>}
            />
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
