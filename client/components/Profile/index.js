import React, { Component } from 'react'
import { Link, Match } from 'react-router'

import { personCenterList } from '../../utils/config'
import MyMovie from '../MyMovie/index'


class Profile extends Component {

    render() {

        const { user, pathname } = this.props
        const tabList = personCenterList.map((item) => <li key={item.id}  className="list-group-item"><Link to={`${pathname}${item.url}`} >{item.title}</Link></li>)

        return (
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        {tabList}
                    </ul>
                </div>
                <div className="col-md-8">
                    <Match pattern={`${pathname}/movie`} component={MyMovie} />
                </div>
            </div>
        )
    }
}

export default Profile