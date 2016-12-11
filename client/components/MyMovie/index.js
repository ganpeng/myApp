import React, { Component } from 'react'
import { Link, Match } from 'react-router'
import { connect } from 'react-redux'


import AddMovie from './AddMovie'
import MyMovieList from './MyMovieList'

class MyMovie extends Component {
    render() {
        const { pathname } = this.props
        return (
            <div className="row">
                <Link to={`${pathname}/add`} className="btn btn-primary">添加电影</Link>

                <Match exactly pattern={`${pathname}`} component={MyMovieList} />
                <Match pattern={`${pathname}/add`} component={AddMovie} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, {})(MyMovie)