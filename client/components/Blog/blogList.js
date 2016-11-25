'use strict'

import React, { Component } from 'react'
import { Link, Match } from 'react-router'

import BlogDetail from './blogDetail'

class BlogList extends Component {
    render() {
        const { blogs, pathname } = this.props
        return (
            <div>
                <ul className="blogList">
                    {
                        blogs.map((blog) => {
                            return <li key={blog.id}>
                                        <Link to={`${pathname}/${blog.id}`}>{blog.title}</Link>
                                </li>
                        })
                    }
                </ul>

                <Match pattern={`${pathname}/:id`} component={BlogDetail} />
                <Match exactly pattern={`${pathname}/:id`} component={BlogDetail} />
            </div>
        )
    }
}


export default BlogList