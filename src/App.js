import React, { Component } from "react";
import "./css/App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/nav_bar.js";
import WorkItem from "./components/work_item.js";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <div className="container work-list">
            <WorkItem
              title="Spotify: Artist Wrapped"
              imageSrc={["wrapped/1.jpg", "wrapped/2.png", "wrapped/3.jpg"]}
              technologies={["BigQuery"]}
              linkText="About Artist Wrapped"
              linkURL="https://newsroom.spotify.com/2023-11-29/wrapped-for-artists-creators/"
            >
              As the leader of the engineering team for Artist Wrapped, I
              spearheaded collaboration across multiple teams, streamlining
              processes for the major campaign, Wrapped. This project, widely
              recognized by everyone, holds particular significance for artists
              on Spotify, including global icons like Taylor Swift, Bad Bunny,
              Drake, and The Weeknd. In my dual capacity as a product manager, I
              played a pivotal role in directly engaging with business and
              marketing leaders to ensure the success of this renowned campaign
              for some of the world's largest artists.
            </WorkItem>
            <WorkItem
              title="Spotify: Manage"
              imageSrc="spotify-manage.jpg"
              technologies={["React", "GraphQL", "Node"]}
              linkText="Scaling Platforms at Spotify"
              linkURL="https://www.stride.build/scaling-tech/how-spotify-optimizes-platform-reuse-for-operational-efficiency-with-marcus-frodin"
            >
              Leader of the full-stack engineering team for Spotify Manage.
              Spotify Manage is a platform that served both internal Spotify
              teams and products across the entire business. It allowed new and
              existing Spotify products to manage their organizations teams and
              user permissions, greatly increasing product launches and speed to
              market.
            </WorkItem>

            <WorkItem
              title="Better.com"
              imageSrc="better-tasks.jpg"
              technologies={["React", "GraphQL", "Node"]}
              linkText="Visit Site"
              linkURL="https://better.com/"
            >
              Leader of a consumer facing team of 6-8 engineers. Working on
              iteratively improving the information and document collection
              experience which allow consumers to provide Better with all the
              information required to underwrite and fund their loans.
            </WorkItem>
            <WorkItem
              title="Zola: Invites + Paper"
              imageSrc={["invites/1.jpg", "invites/2.jpg", "invites/3.jpg"]}
              technologies={["React", "Redux", "LESS", "JavaScript", "Node"]}
              linkText="Visit Site"
              linkURL="https://www.zola.com/wedding-planning/paper"
            >
              I lead the team through planning to execution introducing a brand
              new product to the market. Oversaw a team of 8 plus engineers
              driving brand new revenue to Zola. This is a highly complex new
              product which has new fulfillment separate from our existing
              ecosystem. Built to scale our product offering quickly and with
              very little manual overhead. This product also integrates with our
              existing products in multiple ways to add value to our users and
              make creating their paper products experience as streamlined and
              easy as possible.
            </WorkItem>

            <WorkItem
              title="Zola: Vendor Marketplace"
              imageSrc="vendor.jpg"
              technologies={["React", "JavaScript", "Node"]}
              linkText="Visit Site"
              linkURL="https://www.zola.com/wedding-vendors"
            >
              I lead the build of the minimum viable product for the vendor
              marketplace. This was a brand new product for Zola which allowed
              couples to find and book vendors for their wedding. This was a
              highly complex product which required integration with multiple
              third party APIs and services. This was a greenfield project and I
              was responsible for the entire web build from the ground up.
              Working directly with the CPO to define the requirements and build
              based on user feedback with early partner vendors.
            </WorkItem>

            <WorkItem
              title="Hershey"
              imageSrc="hershey.jpg"
              technologies={[
                "HTML",
                "SASS",
                "JavaScript",
                "AEM",
                "HandleBars.js",
                "Grunt",
              ]}
              linkText="Visit Site"
              linkURL="https://www.hersheys.com/en_us/home.html"
            >
              I lead and developed alongside our UI team, a library for Hershey
              to use for their corporate and brands websites (KitKat, Reeses,
              Twizzler, etc.). The library was built following atomic design
              principles to create modules/components and integrating them into
              a CMS (AEM). I was also responsible for training partner agencies
              to customize and theme the modules we created to tailor them to
              each brand&#39;s needs. This was done on-location and in-person at
              Hershey with the other agencies.
            </WorkItem>

            <WorkItem
              title="Banana Republic"
              imageSrc="banana.jpg"
              technologies={[
                "HTML",
                "CSS",
                "JavaScript",
                "WordPress",
                "Google Maps API",
              ]}
              // linkText="Visit Site"
              // linkURL="https://bananarepublic.ru/en/"
            >
              Created a WordPress site which was localized for numerous
              different regions and languages. CMS editable content and custom
              page types created. Development also included a custom store
              locator which was built out using Google Maps.
            </WorkItem>

            <WorkItem
              title="BMW 4Series"
              imageSrc="4series.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
            >
              Launch experience for the latest 4Series by BMW North America.
            </WorkItem>

            <WorkItem
              title="Harman Infinity Speakers"
              imageSrc="harman-infinity.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
              linkText="Visit Site"
              linkURL="http://www.infinityspeakers.com/"
            >
              KBS was tasked with the redesign and development the Infinity
              Speakers site to showcase and sell their products.
            </WorkItem>

            <WorkItem
              title="Funk Island NYC"
              imageSrc="funk.jpg"
              technologies={["React", "SASS", "JavaScript"]}
            >
              Worked with the Founder of Funk Island to create a luxury booking
              experience for last minute travels based out of NYC.
            </WorkItem>

            <WorkItem
              title="JayZ"
              imageSrc="jayz.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
            >
              Main site for JayZ's launch of his Gold fragrance. Showcased the
              product and featured a store locator.
            </WorkItem>

            <WorkItem
              title="Moet on the Map"
              imageSrc="moet.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
            >
              To help promote a limited edition run of Moet & Chandon we created
              a website to accompany as social campaign. This limited edition
              was run with city specific label for regions like NYC, LA and DC.
              The site allowed users to upload a photo and process it with
              filters and location graphics for their city and place them on the
              map.
            </WorkItem>

            <WorkItem
              title="Homegoods Store Locator"
              imageSrc="homegoods-locator.jpg"
              technologies={[
                "HTML",
                "CSS",
                "JavaScript",
                "WordPress",
                "Google Maps API",
              ]}
              linkText="Visit Site"
              linkURL="https://www.homegoods.com/locator"
            >
              This store locator was driven by an API call to retrieve locations
              and store details. Using this information and the Google Maps API
              to plot them on a map and display based on proximity to a searched
              location.
            </WorkItem>

            <WorkItem
              title="Windstream Replatform"
              imageSrc="ws-replatform.jpg"
              technologies={["HTML", "CSS", "JavaScript", "Kentico", "Grunt"]}
              linkText="Visit Site"
              linkURL="https://smallbusiness.windstream.com"
            >
              This project involved the entire creation of a brand new platform
              for the marketing sites for both Small Business and Residential
              Markets.
            </WorkItem>

            <WorkItem
              title="BMW M/Universe Tumblr"
              imageSrc="mtumblr.jpg"
              technologies={["HTML", "CSS", "JavaScript", "Tumblr"]}
              // linkText="Visit Site"
              // linkURL="http://bmwusam.tumblr.com/"
            >
              A fully custom Tumblr theme was created for M enthusiasts to share
              images of their vehicles on. In addition to tailored pages for
              different models of M series cars we added functionality to
              Tumblr. Such as a responsive layout, infinite scroll and modals
              views of posts.
            </WorkItem>

            <WorkItem
              title="BMW M2"
              imageSrc={["m2-1.jpg", "m2-2.jpg", "m2-3.jpg"]}
              technologies={["HTML", "CSS", "JavaScript", "Mobile"]}
            >
              Mobile landing page for the release of the all new M2.
            </WorkItem>

            <WorkItem
              title="BMW Center Services"
              imageSrc="center.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
            >
              Web experience showcasing all of the benefits and capabilities of
              local service centers.
            </WorkItem>

            <WorkItem
              title="BMW Electronaut"
              imageSrc={[
                "electronaut/1.jpg",
                "electronaut/2.jpg",
                "electronaut/3.jpg",
                "electronaut/4.jpg",
              ]}
              technologies={["HTML", "CSS", "JavaScript", "Mobile"]}
            >
              This was a dashboard which was created for the first pilot drivers
              of BMW&#39;s electric vehicles. This displayed stats based on data
              collected from their vehicles to show them information such as
              miles driven and potential savings by going electric. This also
              was a portal for information about the capabilities and features
              of their pilot vehicles.
            </WorkItem>

            <WorkItem
              title="Dewalt Flexvolt"
              imageSrc="dewalt.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
            >
              Design and layout for the launch of Dewalts new Flexvolt product
              line. Fully integrated with their ecommerce site. Featured product
              videos and custom css lightning bolt animation matching the
              creative branding of the product line.
            </WorkItem>

            <WorkItem
              title="Villa Provartenik"
              imageSrc="villa.jpg"
              technologies={["React", "SASS", "JavaScript", "Firebase"]}
              linkText="Visit Site"
              linkURL="https://villaprovartenik.com/en/"
            >
              Full branding work for the Villa Provartenik including Logo
              Design, Photography and website. Establishing an online presence
              to drive business to this brand-new Villa in the mountains of
              Bulgaria.
            </WorkItem>

            <WorkItem
              title="Harman Portable"
              imageSrc="harman-portable.jpg"
              technologies={["HTML", "CSS", "JavaScript", "HTML5 Video"]}
              linkText="View Demo Video"
              linkURL="https://www.youtube.com/watch?v=8-xAssUVCPA"
            >
              Created a landing page to showcase the features of the new
              Portable One Speaker. We used the HTML5 Video API to control the
              playback of a video to provide a 3D interactive experience.
            </WorkItem>

            <WorkItem
              title="Harman Clarifi Sound"
              imageSrc="harman-clarifi.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
              linkText="Visit Site"
              linkURL="http://www.clarifisound.com/"
            >
              Created a website and customized audio player to demonstrate the
              capabilities of Harman&#39;s Clarifi technology. A technology
              which enhances the sound quality of highly compresses audio.
            </WorkItem>

            <WorkItem
              title="Harman Mark Levinson"
              imageSrc="harman-ml.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
              linkText="Visit Site"
              linkURL="http://www.marklevinson.com/"
            ></WorkItem>

            <WorkItem
              title="Harman Distortion of Sound"
              imageSrc="harman-dos.jpg"
              technologies={["HTML", "CSS", "JavaScript"]}
              // linkText="Visit Site"
              // linkURL="http://www.distortionofsound.com/"
            >
              Promotional and informational site for Harman&#39;s documentary
              Distortion of Sound. Featuring Linkin Park.
            </WorkItem>

            <WorkItem
              title="Homegoods StyleScope"
              imageSrc="style-scope.jpg"
              technologies={["HTML", "CSS", "JavaScript", "WordPress"]}
              linkText="Read More"
              linkURL="https://www.sarahcatherinedesign.com/blog/2012/10/17/homegoods-stylescope-find-your-style"
              // linkText="Visit Site"
              // linkURL="http://www.homegoods.com/stylescope/"
            >
              Users select a series of images that they like and depending on
              that selection determines what style fits their taste. Based on
              that style we display a customized page revealing their
              recommending style and suggested products that HomeGoods has
              carried which fits that theme.
            </WorkItem>

            <WorkItem
              title="Work Time"
              imageSrc="work.jpg"
              technologies={["React", "JavaScript", "Firebase"]}
              linkText="Visit Site"
              linkURL="https://work-time-3400d.firebaseapp.com/"
            >
              Built out of necessity when working across time zones. This simple
              application displays the time for each hour in an easy to digest
              manner.
            </WorkItem>

            <WorkItem
              title="Doctorate Research: Decision Making Task"
              imageSrc="decision.jpg"
              technologies={[
                "HTML",
                "CSS",
                "JavaScript",
                "LocalStorage",
                "Node.js",
                "MongoDB",
                "Express",
              ]}
              linkText="View Code"
              linkURL="https://github.com/stvedt/decision-task-node"
            >
              I developed an experience to help a doctoral candidate collect
              research for their thesis. The experience was simulating the
              deduction of sampling two choices with different probabilities and
              determing whether a user can decide which is the better bet. I
              built out and API using express to track all of this information
              and store it in a MongoDB
            </WorkItem>

            <WorkItem
              title="Plug Notify Chrome Extension"
              imageSrc="plug-screen.jpg"
              technologies={["HTML", "CSS", "JavaScript", "Chrome Extension"]}
              linkText="Chrome Store"
              linkURL="https://chrome.google.com/webstore/detail/plug-notify/ofoajhhdimlfpfhdcngpfakkippmdkel"
              gitText="Github Repo"
              gitURL="https://github.com/stvedt/Plug-Notify"
            >
              Plug Notify is a Chrome Extension that provides users with
              notifications. Notifications appear when a new song is playing and
              displays the details. Also, users get a notification whenever
              there username is @mentioned in the chat for the room they are in.
            </WorkItem>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
