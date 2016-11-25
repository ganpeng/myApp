'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'


class BlogDetail extends Component {

    render() {

        const { blogs, params } = this.props
        const index = blogs.findIndex((blog) => blog.id === parseInt(params.id))
        const blog = blogs[index]
        let blogHtml
        if (index !== -1) {
            blogHtml = (
                <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            )
        } else {
            blogHtml = <h1>No blog</h1>
        }
        return (
            <div className="blogdetail">
                {blogHtml} 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        blogs : state.blogs
    }
}


export default connect(mapStateToProps)(BlogDetail)