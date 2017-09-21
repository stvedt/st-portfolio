import React, { Component } from 'react';
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
              imageSrc="hershey.jpg" technologies={['HTML','SASS','JavaScript','AEM','HandleBars.js','Grunt']}
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
              title="Homegoods Store Locator"
              imageSrc="homegoods-locator.jpg"
              technologies={['HTML','CSS','JavaScript','WordPress','Google Maps API']}
              linkText="Visit Site"
              linkURL="https://www.homegoods.com/tjx/locator.aspx"
              >
              This is a description about the challenges of this project
            </WorkItem>

            <WorkItem
              title="Windstream Replatform"
              imageSrc="ws-replatform.jpg" technologies={['HTML','CSS','JavaScript','Kentico','Grunt']}
              linkText="Visit Site"
              linkURL="https://smallbusiness.windstream.com"
              >
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
              title="BMW M2"
              imageSrc={["m2-1.jpg","m2-2.jpg","m2-3.jpg"]}
              technologies={['HTML','CSS','JavaScript','Mobile']}
              >
            </WorkItem>

            <WorkItem
              title="BMW Electronaut"
              imageSrc={["electronaut/1.jpg","electronaut/2.jpg","electronaut/3.jpg","electronaut/4.jpg"]}
              technologies={['HTML','CSS','JavaScript','Mobile']}
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
              title="Harman Portable"
              imageSrc="harman-portable.jpg"
              technologies={['HTML','CSS','JavaScript','HTML5 Video']}
              linkText="View Demo Video"
              linkURL="https://www.youtube.com/watch?v=8-xAssUVCPA"
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

            <WorkItem
              title="Plug Notify Chrome Extension"
              imageSrc="plug-screen.jpg"
              technologies={['HTML','CSS','JavaScript','Chrome Extension']}
              linkText="Visit Chrome Store"
              linkURL="https://chrome.google.com/webstore/detail/plug-notify/ofoajhhdimlfpfhdcngpfakkippmdkel"
              gitText="View Github Repo"
              gitURL="https://github.com/stvedt/Plug-Notify"
              >
            </WorkItem>



          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
