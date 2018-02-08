import React, { Component } from 'react'
 import {gapi} from 'gapi'

let CLIENT_ID = '640301697323-mu3mocshjjp6m85cka04chckpkclhauc.apps.googleusercontent.com'
let API_KEY = 'rL5OXf02le7ycnrpo13cmiJd'

const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/calendar' 

const authorizeButton = document.getElementById('authorize-button')
const signoutButton = document.getElementById('signout-button');

let CALENDAR_ID = 'primary'



class Scrape extends Component {
  
  state = {
    gapiReady: false
  }
  
  getEvents = async (path) => {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
    console.log('URL', url)
    const response = await fetch(url)
    const data = await response.json()
    console.log('SUCCESS',data)
  }

loadCalendarApi = () => {
    // const script = document.createElement("script");
    // script.src = "https://apis.google.com/js/client.js";

    // script.onload = () => {
    //     if(!gapi){
    //         console.log('loading')
    //     }
    //   gapi.load('client', () => {
    //     gapi.client.setApiKey(API_KEY);
    //     gapi.client.load('youtube', 'v3', () => {
    //       this.setState({ gapiReady: true });
    //     });
    //   });
    // };

    // document.body.appendChild(script);
  }

  componentDidMount = () => {
      this.getEvents() // this.window.auth2, this.window.gapi)
    // this.loadCalendarApi()
    // this.handleClientLoad()
  }


// handleClientLoad = (initClient) => {
//     gapi.load('client:auth2', initClient);
// }

updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      this.listUpcomingEvents();
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
}

handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
}

handleSignoutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut();
}

appendPre = (message) => {
    let pre = document.getElementById('content');
    let textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

listUpcomingEvents = () => {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(function(response) {
      let events = response.result.items;
      this.appendPre('Upcoming events:');

      if (events.length > 0) {
        for (let i = 0; i < events.length; i++) {
          let event = events[i];
          let when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          this.appendPre(event.summary + ' (' + when + ')')
        }
      } else {
        this.appendPre('No upcoming events found.');
      }
    });
}
    initClient = () => {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function(updateSigninStatus,handleAuthClick,handleSignoutClick) {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        });
    }




    
    render() {
        if (this.state.gapiReady) {
            return (
              <h1>GAPI is loaded and ready to use.</h1>
            );
         };
        return (
            <div>
            </div>
        )
    }
}

export default Scrape