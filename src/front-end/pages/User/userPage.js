import React, { Component } from 'react'
import './user-page.css'
import NumberOfEvents from './components/numberOfEvents'
import Groups from './components/groups'

class UserPage extends Component {
    render(){
        return(
            <div className='user-page-container'>
                <div className='performance-information'>
                    <NumberOfEvents/>
                    <Groups/>
                </div>

            </div>
        )
    }
}

export default UserPage