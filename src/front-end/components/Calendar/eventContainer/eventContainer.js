import React, { Component } from 'react'
import './event-container.css'
import EventChild from '../eventContainer/eventChild/eventChild'
import Title from './eventChild/titleChild'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class EventContainer extends Component {

    state = {
        calendarSlideOutIsVisible: false
    }


    eventChildren = () => {

        if (!this.props.data || !this.props.data.allEvents) {
            return null
        }
        return this.props.data.allEvents.map((event) => {
            return (<EventChild id={event.id}
                eventClick={this.props.eventClick}
                time={event.when} />)
        })
    }

    render() {

        return (
            <div className='event-container'>
                <div className='event-container-grid'>
                    <Title />
                    {this.eventChildren()}

                </div>
            </div>
        )
    }
}

const query = gql`
    query{
        allEvents{
            id when
        }
    }
`

export default graphql(query)(EventContainer)