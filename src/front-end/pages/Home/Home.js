import React, { Component } from 'react'
import './Home.css' 
import Calendar from '../../components/Calendar/Calendar'
import Nav from '../../components/nav'
import WhoPopout from '../../components/Calendar/userInput/popouts/whoPopout'

class Home extends Component {
    
    componentWillMount() {
   console.log(this.props.match.params.id)
        // if (!this.props.match) {
        //     console.log("MATCH",this.props.match)
        // }
    }
    
    render() {
        return (
            <div className='Home'>
                <Nav/>
                <Calendar id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default Home 