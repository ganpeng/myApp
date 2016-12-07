import React, { Component } from 'react'
import { Link, Match } from 'react-router'

import MyMovie from '../MyMovie/index'


class Profile extends Component {
    render() {
        const { user, pathname } = this.props
        return (
            <div className="row">
                <div className="col-md-4">
                    <Link to={`${pathname}/movie`}>电影</Link>
                    <h4>Profile</h4>
                    <p>{user.id}</p>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                    <p>{pathname}</p>
                </div>
                <div className="col-md-8">
                    <Match pattern={`${pathname}/movie`} component={MyMovie} />
                </div>
            </div>
        )
    }
}

export default Profile