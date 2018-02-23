import React, { Component } from 'react'
import { graphql } from 'react-apollo' 
import { withRouter } from 'react-router-dom'
import { deleteEvent } from '../../../service'


class ButtonDelete extends Component {

    deleteClick = () => {
            this.props.mutate({
                variables: {
                    id: this.props.id
                }
            }).then((res) => {
                this.setState({
                    res: true
                })
            })
    }

    render() {
        return(
            <button onClick={this.deleteClick}>
                {this.props.time} 
            </button>
        )
    }
}

export default withRouter(graphql(deleteEvent)(ButtonDelete))