import React, { Component } from 'react'
import './create.css'
import props from 'prop-types'

class Create extends Component {
    render() {
        return(
            <button className='calendar-slide-out-create-button' >
                <p className='create-button-words'>
                    Create
                </p>
            </button>
        )
    }
}

export default Create