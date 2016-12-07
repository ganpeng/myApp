import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import LoginForm from '../../components/LoginForm'

class LoginPage extends Component {
    render() {
        const { isAuthorized } = this.props.auth

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <h2>Login</h2>
                    { isAuthorized ? (<Redirect to="/" />) : <LoginForm />}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, {})(LoginPage)