import React, { Component } from 'react' 
import './CreateEvent.css' 
import Scrape from '../back-end/Scrape' 

let event = {
    'summary' : 'Weekly Sales Report',
    'location' : '623 South 800 East, Salt Lake City, UT 84102',
    'description' : "Each team's goals and percentage to quota.",
    'start' : {
        'dateTime' : '2018-02-5T09:00:00-9:30:00',
        'timeZone' : 'America/Mountain Time'
    },
    'end' : {
        'dateTime' : '2018-02-5T00:00:00-9:30:00',
        'timeZone' : 'America/Mountain Time'
    },
    'recurrence' : [
        'RRULE:FREQ=WEEKLY;COUNT=52'
    ],
    'attendees' : [
        {'email': 'nothing@gmail.com'},
        {'email': 'nothing@gmail.com'},
        {'email': 'nothing@gmail.com'}
    ],
    'reminders' : {
        'useDefault' : false,
        'overrides' : [
            {'method': 'email', 'minutes' : 24 * 60},
            {'method': 'popup', 'minutes' : 10 },
            
        ]
    }
}

let weeklyConference = gapi.client.calendar.events.insert({
    'calendarId' : 'primary',
    'resource' : event
})

request.execute(function(event) {
    appendPre('Event created: ' + event.htmlLink)
})

class Insert extends Component  {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Insert