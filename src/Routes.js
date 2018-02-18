import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './front-end/pages/Home/Home'
import EventChild from './front-end/components/Calendar/eventContainer/eventChild/eventChild'
import Create from './front-end/components/Calendar/userInput/buttons/create'
import When from './front-end/components/Calendar/userInput/buttons/when'
import Where from './front-end/components/Calendar/userInput/buttons/where'
import WhoPopout from './front-end/components/Calendar/userInput/popouts/whoPopout'
import UserPage from './front-end/pages/User/userPage'
import Login from './front-end/pages/User/Login/login'

class Routes extends Component {
    render(){
        return(
            <main>
                <Router>
                    <div>
                        <Route exact path='/' component={Home}/>
                        <Route path='/who' component={WhoPopout}/>
                        <Route exact path='/userdashboard' component={UserPage}/>
                        <Route path='/userdashboard/login' component={Login}/>
                    </div>
                </Router>
            </main>
        )
    }
}

export default Routes