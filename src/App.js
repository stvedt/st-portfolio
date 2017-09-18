import React, { Component } from 'react'
import './css/App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/nav_bar.js';
import WorkItem from './components/work_item.js';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <div className="container work-list">

            <WorkItem
              title="Hershey"
              imageSrc="hershey.jpg" technologies={['HTML','CSS','JavaScript','AEM','HandleBars.js']}
              linkText="Visit Site"
              linkURL="https://www.hersheys.com/en_us/home.html"
              >
              For Hershey we built a UI Library for them to use for both their main Herhseys.com website and for each of their brands to use as well. We played an integral role in creating the UX/UI and integrating it into AEM for all their brands. Training of partner agencies was also necessary because each brand has their own agency which oversees individual brand identities.
            </WorkItem>

            <WorkItem
              title="Banana Republic"
              imageSrc="banana.jpg"
              technologies={['HTML','CSS','JavaScript','WordPress', 'Google Maps API']}
              linkText="Visit Site"
              linkURL="https://bananarepublic.ru/en/">
              Created a WordPress site which was localized for numerous different regions and languages. CMS editable content and custom page types created. Development also included a custom store locator which was built out using Google Maps.
            </WorkItem>

            <WorkItem
              title="Doctorate Research: Decision Making Task"
              imageSrc="decision.jpg" technologies={['HTML','CSS','JavaScript','LocalStorage','Node.js','MongoDB', 'Express']}
              linkText="View Code"
              linkURL="https://github.com/stvedt/decision-task-node"
              >
              I developed an experience to help a doctoral candidate collect research for their thesis. The experience was simulating the deduction of sampling two choices with different probabilities and determing whether a user can decide which is the better bet. I built out and API using express to track all of this information and store it in a MongoDB
            </WorkItem>

            <WorkItem
              title="Homegoods Store Locator"
              imageSrc="homegoods-locator.jpg"
              technologies={['HTML','CSS','JavaScript','WordPress','Google Maps API']}
              linkText="Visit Site"
              linkURL="https://www.homegoods.com/tjx/locator.aspx"
              >
              This is a description about the challenges of this project
            </WorkItem>

            <WorkItem
              title="BMW M/Universe Tumblr"
              imageSrc="mtumblr.jpg"
              technologies={['HTML','CSS','JavaScript','Tumblr']}
              linkText="Visit Site"
              linkURL="http://bmwusam.tumblr.com/"
              >
            </WorkItem>

            <WorkItem
              title="Harman Infinity Speakers"
              imageSrc="harman-infinity.jpg"
              technologies={['HTML','CSS','JavaScript']}
              linkText="Visit Site"
              linkURL="http://www.infinityspeakers.com/"
              >
            </WorkItem>

            <WorkItem
              title="Harman Clarifi Sound"
              imageSrc="harman-clarifi.jpg"
              technologies={['HTML','CSS','JavaScript']}
              linkText="Visit Site"
              linkURL="http://www.clarifisound.com/"
              >
            </WorkItem>

            <WorkItem
              title="Harman Mark Levinson"
              imageSrc="harman-ml.jpg"
              technologies={['HTML','CSS','JavaScript']}
              linkText="Visit Site"
              linkURL="http://www.marklevinson.com/"
              >
            </WorkItem>

            <WorkItem
              title="Harman Distortion of Sound"
              imageSrc="harman-dos.jpg"
              technologies={['HTML','CSS','JavaScript']}
              linkText="Visit Site"
              linkURL="http://www.distortionofsound.com/"
              >
            </WorkItem>

            <WorkItem
              title="Homegoods StyleScope"
              imageSrc="style-scope.jpg"
              technologies={['HTML','CSS','JavaScript','WordPress']}
              linkText="Visit Site"
              linkURL="http://www.homegoods.com/stylescope/"
              >
            </WorkItem>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
