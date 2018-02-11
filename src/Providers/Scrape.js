import React, { Component } from 'react'
import AppConfig from './../AppConfig' 

let CLIENT_ID = AppConfig.clientId
let API_KEY = AppConfig.apiKey
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/calendar' 

let CALENDAR_ID = 'primary'


// const GoogleCredential credential = new GoogleCredential.Builder()
//     .setTransport(httpTransport)
//     .setJsonFactory(JSON_FACTORY)
//     .setServiceAccountId(emailAddress)
//     .setServiceAccountPrivateKeyfromFile(newFile("MyProject.p12"))
//     .setServiceAccountUser('serviceaccountuser')

const getEvents = async (path) => {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
  console.log('URL', url)
  const response = await fetch(url)
  const data = await response.json()
  console.log('SUCCESS',data)
}

// let listUpcomingEvents = () => {
//   gapi.client.calendar.events.list({
//     'calendarId': 'primary',
//     'timeMin': (new Date()).toISOString(),
//     'showDeleted': false,
//     'singleEvents': true,
//     'maxResults': 10,
//     'orderBy': 'startTime'
//   }).then(function(response) {
//     let events = response.result.items;
//     this.appendPre('Upcoming events:');

//     if (events.length > 0) {
//       for (let i = 0; i < events.length; i++) {
//         let event = events[i];
//         let when = event.start.dateTime;
//         if (!when) {
//           when = event.start.date;
//         }
//         this.appendPre(event.summary + ' (' + when + ')')
//       }
//     } else {
//       this.appendPre('No upcoming events found.');
//     }
//   });
// }

class Scrape extends Component {

    
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Scrape