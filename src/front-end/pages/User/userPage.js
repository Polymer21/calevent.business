import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import './user-page.css'
import NumberOfEvents from './components/numberOfEvents'
import Groups from './components/groups'
import Nav from '../../components/nav'
import ButtonDelete from './buttonDelete'

class UserPage extends Component {


    eventChildren = () => {

        if (!this.props.data || !this.props.data.allEvents) {
            return null
        }
        return this.props.data.allEvents.map((event) => {
            return  (
                <ul> 
                    <li key={event.id}> 
                    <ButtonDelete id={event.id} time={event.when}  /></li>
                </ul>
            )
        })
    }

    
    render() {
        console.log('DATA', this.props.data)
        return (
            <div className='user-page-container'>
                <Nav />
                <div className='performance-information'>
                    <NumberOfEvents />
                    <Groups />
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

export default graphql(query)(UserPage)