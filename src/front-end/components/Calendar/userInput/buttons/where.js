import React, { Component } from 'react'
import './where.css'
import WhoPopout from '../popouts/whoPopout'

class Where extends Component {
    state = {
        isClicked: 'hidden'
    }
    render(){
        return(
            <div>
                 <button onClick={() => {
                     console.log('show where')
                this.setState({
                    isClicked: 'show'
                })
            }} className='calendar-slide-out-where-button'>
                <p className='where-button-words'>
                    Where?
                </p>
            </button>
            <div className={this.state.isClicked}>
                <WhoPopout input= "where" />
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

export default Where