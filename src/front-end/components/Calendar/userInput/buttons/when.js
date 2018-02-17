import React, { Component } from 'react'
import './when.css' 

class When extends Component {
    render() {
        return (
            <button className='calendar-slide-out-when-button'>
                <p className='when-button-words'>When?</p>
            </button>
        )
    }
}

export default When