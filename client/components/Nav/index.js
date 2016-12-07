import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { setCurrentUser } from '../../actions/user'
import setAuthHeader from '../../utils/setAuthHeader'


class Nav extends Component  {

    logout(e) {
        e.preventDefault()
        localStorage.removeItem('token')
        setAuthHeader(false)
        this.props.setCurrentUser({})
    }


    render() {

        const { isAuthorized, user  } = this.props.auth
        const userRender = (
            <ul className="nav navbar-nav navbar-right"> 
                { user && <li><a href="javascript:;">{ user.email } </a></li> }
                <li><a href="#" onClick={this.logout.bind(this)} ><span className="glyphicon glyphicon-log-out"></span>登出</a></li> 
            </ul>                 
        )

        const guestRender = (
            <ul className="nav navbar-nav navbar-right"> 
                <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> 注册</Link></li> 
                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> 登录</Link></li> 
            </ul>                 
        )
        
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
                            { isAuthorized ? userRender : guestRender }
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, { setCurrentUser })(Nav)