import React, { Component } from 'react'
import './groups.css'

class Groups extends Component {

    state = {
        groupListIsHidden: true
    }

    // handleChildGroupClick= () => {
    //     this.setState= false 
    //         if this.setState = false
    //             return 'groups-list-container'
    // }

    render() {
        return (
            <div className='groups-container'>
                <div className='groups-title'>
                    Groups
                </div>
                <div className='groups-number'>
                    8
                </div>

                <div className='groups-list-container'>
                    <div className={this.props.groupName}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Groups