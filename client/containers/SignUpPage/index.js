import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import SignUpForm from '../../components/SignUpForm/index'

class SignUpPage extends Component {
    render() {
        const { isAuthorized } = this.props.auth
        return (
            <div className="row">
                
                {
                    isAuthorized ? (<Redirect to="/" />) : <SignUpForm />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps, {})(SignUpPage)