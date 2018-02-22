import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import {graphql} from 'react-apollo'
import './who-popout.css'
import { whoEventMutation } from '../../../../../service'


class WhoPopout extends Component {
    state = {
        title: '',
        groups: ''
    }

    updateEvent = () => {
        console.log('WHOID', this.props.whoId)
        this.props.mutate({
            variables: {
                whoId: this.props.whoId
            }
        }).then((res) => {
            this.setState({
                res: true
            })
        })
    }

    render() {
        console.log(this.props.id)

        if (this.props.input === 'who') {
            return <div className='who-popout-container'>
                <h1 className='groups-title'>
                    {this.state.title}
                </h1>
                <button onClick={this.updateEvent} className="group-one">{this.props.email}</button>
            </div>
        }

        // if(this.props.input === 'when'){
        //     return <div className='who-popout-container'>
        //     <h1 className='groups-title'>
        //         {this.state.title}
        //     </h1>   
        //     <input type="datetime-local" className="group-one"></input>  
        // </div>
        // }
        // if(this.props.input === 'where'){
        //     return   <div className='who-popout-container'>
        //     <h1 className='groups-title'>
        //         {this.state.title}
        //     </h1>   
        //     <button className="group-one"></button>
        // </div>      
        // }
        return (
            <div>

            </div>
        )
    }
}

export default withRouter(graphql(whoEventMutation)(WhoPopout))