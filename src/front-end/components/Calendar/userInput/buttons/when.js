import React, { Component } from 'react'
import './when.css' 

class When extends Component {

    state = {
        isClicked: true
    }

    buttonClick = () => {
        this.setState((prev, props) => ({isClicked: !prev.isClicked}))
            console.log(this.isClicked)
        }

    render() {
        return (
            <button className={this.props.Clicked ?'calendar-slide-out-when-button' : 'calendar-slide-out-when-button'} onClick={this.buttonClick}>
                <p className='when-button-words'>When?</p>
            </button>
        )
    }
}

export default When