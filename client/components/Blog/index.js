'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import BlogList from './blogList'
import BlogDetail from './blogDetail'


class Blog extends Component {
    render() {
        const { blogs, pathname } = this.props
        return (
            <div>
                <BlogList blogs={blogs} pathname={pathname} /> 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        blogs : state.blogs
    }
}



export default connect(mapStateToProps)(Blog)