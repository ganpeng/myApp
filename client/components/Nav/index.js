'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Brand</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/blog">博客</Link></li>
                            <li><Link to="/music">音乐</Link></li>
                            <li><Link to="/movie">电影</Link></li>
                            <li><Link to="/about">关于我</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/login">登录</Link></li>
                            <li><Link to="/signup">注册</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav