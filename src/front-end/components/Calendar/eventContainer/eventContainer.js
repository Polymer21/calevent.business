import React, { Component } from 'react' 
import './event-container.css' 
import EventChild from '../eventContainer/eventChild/eventChild'
import Title from './eventChild/titleChild'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class EventContainer extends Component {
    render() {
        console.log('when log', this.props.data)
        return (
            <div className='event-container'>
                <div className='event-container-grid'>
                    <Title/>
                    
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