import React, { Component } from 'react'
import { Link } from 'react-router'


class Nav extends Component  {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">My WebSite</Link>
                    </div>
                    <div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/movie">电影</Link></li>
                            <li><Link to="/about">关于我</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right"> 
                            <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> 注册</Link></li> 
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> 登录</Link></li> 
                        </ul>                 
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav