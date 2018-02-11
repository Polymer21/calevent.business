import React, { Component } from 'react'
import './title.css'

class Title extends Component {
    render() {
        return (
            <div className='title'>
                <div className='title-instruction'>
                    <h2 className='title-instruction-words'> Go ahead, select your best date. </h2>
                </div>
                <div className='date'>
                    <h1 className='current-date'>2.22.18</h1>
                </div>
            </div>
        )
    }
}

export default Title