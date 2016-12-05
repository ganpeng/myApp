import React, { Component } from 'react'
import { Match } from 'react-router'

import Home from '../../components/Home'
import Movie from '../../components/Movie'
import About from '../../components/About'

class MainSection extends Component {
    render() {
        return (
            <div className="container">
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/about" component={About} />
                <Match pattern="/movie" component={Movie} />
            </div>
        )
    }
}


export default MainSection