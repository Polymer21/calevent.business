import React, { Component } from 'react'
import './who.css'
import WhoPopout from '../popouts/whoPopout'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'



class Who extends Component {

    state = {
        isClicked: 'hidden'
    }

    render() {
        console.log('match', this.props.match)
        console.log('our event id', this.props.id)
        if (!this.props.data.allWhoes) {
            return <div> Loading </div>
        }
        console.log("PROPS", this.props.data.allWhoes[0].email)
        return (
            <div>
            <button onClick={() => {
                this.setState({
                    isClicked: 'show'
                })
            }} className='calendar-slide-out-who-button'>
                <p className='where-button-words'>
                    Who?
                </p>
            </button>
           <div className={this.state.isClicked}>
            <WhoPopout input="who" email={this.props.data.allWhoes[0].email} whoId={this.props.data.allWhoes[0].id} id={this.props.id}/>
            </div>
            <div className={`close-button ${this.state.isClicked}`} 
            onClick={() => {
                this.setState({
                    isClicked: 'hidden'
                })
            }}>
                X
            </div>
            </div>
        )
    }
}

const query = gql`
query { allWhoes {
    email id
}}`

const mapStateToProps = (state) => {
    return{
        id: state.id
    }
}
export default graphql(query)(Who)