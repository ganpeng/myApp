import React, { Component } from 'react'

import Profile from '../../components/Profile'


class ProfilePage extends Component {
    render() {
        const { auth, pathname } = this.props
        return (
            <Profile user={auth.user} pathname={pathname} />
        )
    }
}



export default ProfilePage