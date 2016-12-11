import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'


export default (ComposeComponent) => {

    class Authenticate extends Component {

        render() {

            const { isAuthorized } = this.props.auth

            return (
                <div>
                    {
                        isAuthorized ? (<ComposeComponent {...this.props} />) : (<Redirect to="/login" />)
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


    return connect(mapStateToProps, {})(Authenticate)

}