'use strict'

import React, { Component } from 'react'
import { Match } from 'react-router'

import Home from '../../components/Home'
import Blog from '../../components/Blog'
import Movie from '../../components/Movie'
import Music from '../../components/Music'
import About from '../../components/About'
import SignUp from '../../components/SignUp'
import Login from '../../components/Login'


class MainSection extends Component {
    render() {
        return (
            <div>
                <h2>MainSection</h2>
                
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/blog" component={Blog} />
                <Match pattern="/movie" component={Movie} />
                <Match pattern="/music" component={Music} />
                <Match pattern="/about" component={About} />
                <Match pattern="/signup" component={SignUp} />
                <Match pattern="/login" component={Login} />
            </div>
        )
    }
}


export default MainSection