import React, { Component } from 'react'
import './when.css' 
import WhoPopout from '../popouts/whoPopout'

class When extends Component {

    state = {
        isClicked: 'hidden'
    }
    render() {
        return (
            <div>
            <button onClick={() => {
                console.log('show')
                this.setState({
                    isClicked: 'show'
                })
            }} className='calendar-slide-out-when-button'>
                <p className='when-button-words'>When?</p>
            </button>
            <div className={this.state.isClicked}>
            <WhoPopout input="when" />
            </div>
            <button className={`close-button ${this.state.isClicked}`} 
            onClick={() => {
                this.setState({
                    isClicked: 'hidden'
                })
            }}>
            </button>
            </div>
        )
    }
}

export default When