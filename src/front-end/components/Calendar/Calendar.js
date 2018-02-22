import React, { Component } from 'react'
import './Calendar.css' 
import EventContainer from '../Calendar/eventContainer/eventContainer'
import CalendarSlideOut from '../Calendar/userInput/calendarSlideOut'

class Calendar extends Component {
   
    state = {
        calendarSlideOutIsVisible: false
    }

    eventClick = () => {
        this.setState((prev,props) => ({calendarSlideOutIsVisible: !prev.calendarSlideOutIsVisible})) 
    }



    render() {
        console.log(this.state)
        return(
            <div className='calendar-container'>
                <CalendarSlideOut isVisible={this.state.calendarSlideOutIsVisible} id={this.props.id} />
                <EventContainer eventClick={this.eventClick}/>
            </div>
        )
    }
}

export default Calendar