import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/nav_bar.js';
import WorkItem from './components/work_item.js';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const styles = {
  button: {
    margin: 12,
  }
}
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <div className="container work-list">

            <WorkItem title="Test Title" imageSrc="banana.jpg" technologies={['React','Webpack', 'ES6','Bootstrap']} linkText="View Site" linkURL="https://google.com">
              This is a description about the challenges of this project
            </WorkItem>

            <WorkItem title="Test Title" imageSrc="banana.jpg" technologies={['React','Webpack', 'ES6','Bootstrap']}>
              This is a description about the challenges of this project
            </WorkItem>

            <WorkItem title="Test Title" imageSrc="banana.jpg" technologies={['React','Webpack', 'ES6','Bootstrap']}>
              This is a description about the challenges of this project
            </WorkItem>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
