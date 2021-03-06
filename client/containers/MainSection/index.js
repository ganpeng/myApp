import React, { Component } from 'react'
import { Match } from 'react-router'

import Home from '../../components/Home'
import Movie from '../../components/Movie'
import About from '../../components/About'
import SignUpPage from '../SignUpPage'
import LoginPage from '../LoginPage'
import ProfilePage from '../ProfilePage'

import Authenticate from '../../utils/requireAuth'

class MainSection extends Component {
    render() {
        return (
            <div className="container">
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/about" component={About} />
                <Match pattern="/movie" component={Authenticate(Movie)} />
                <Match pattern="/signup" component={SignUpPage} />
                <Match pattern="/login" component={LoginPage} />
                <Match pattern="/profile" component={Authenticate(ProfilePage)} />
            </div>
        )
    }
}


export default MainSection