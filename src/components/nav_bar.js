import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import "../css/mui-icon-custom.css";
const styles = {
  button: {
    margin: "10px",
  },
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  //<img src={logo} alt="Stephen Tvedt Logo" />
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="container">
          <a className="navbar-brand" href="/">
            Stephen Tvedt - Engineering Manager
          </a>
          <div className="navbar-right">
            <RaisedButton
              href="https://github.com/stvedt"
              rel="noopener"
              target="_blank"
              label="Github"
              style={styles.button}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
            <RaisedButton
              href={
                process.env.PUBLIC_URL +
                "/files/Stephen-Tvedt-Resume-05-2022.pdf"
              }
              label="Resume"
              target="_blank"
              style={styles.button}
              icon={
                <FontIcon className="material-icons">file_download</FontIcon>
              }
            />

            <RaisedButton
              href="https://blog.stephentvedt.com"
              label="Blog"
              rel="noopener"
              target="_blank"
              style={styles.button}
              icon={<FontIcon className="material-icons">rss_feed</FontIcon>}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
