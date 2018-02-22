import React, { Component } from 'react'
import './who-popout.css' 

class WhoPopout extends Component {
    state = {
        title: '',
        groups: ''
    }

componentDidMount(){
  
}
    render() {
            
        if(this.props.input === 'who'){
            return   <div className='who-popout-container'>
            <h1 className='groups-title'>
                {this.state.title}
            </h1>   
            <button className="group-one">{this.props.email}</button> 
        </div>      
        }
        if(this.props.input === 'when'){
            return <div className='who-popout-container'>
            <h1 className='groups-title'>
                {this.state.title}
            </h1>   
            <input type="datetime-local" className="group-one"></input>  
        </div>
        }
        if(this.props.input === 'where'){
            return   <div className='who-popout-container'>
            <h1 className='groups-title'>
                {this.state.title}
            </h1>   
            <button className="group-one"></button>
        </div>      
        }
      return(
          <div>
              
          </div>
      )
    }
}

export default WhoPopout