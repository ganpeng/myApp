import React, { Component } from 'react'

import Nav from '../../components/Nav/index'
import MainSection from '../MainSection'

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <MainSection />
            </div>
        )
    }
}


export default App