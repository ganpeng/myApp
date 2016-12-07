import React, { Component } from 'react'

import InputField from '../InputField'
import { loginValidator } from '../../utils/validator'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            identify : '',
            password : '',
            errors : {},
            isLoading : false
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    isValid() {
        const { errors, isValid } = loginValidator(this.state)

        if (!isValid) {
            this.setState({
                errors
            })
        }

        return isValid
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    onClick() {

        if (this.isValid()) {
            this.setState({errors : {}, isLoading: true})
        }

    }

    render() {
        const { identify, password, errors, isLoading } = this.state
        return (
            <div className="form-horizontal">
                <InputField 
                    label="用户名/密码" 
                    name="identify"
                    value={identify}
                    error={errors.identify}
                    onChange={this.onChange}
                />
                <InputField 
                    label="密码"
                    name="password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />
                <div className="form-group">
                    <button disabled={isLoading} type="button" className="btn btn-lg btn-primary" onClick={this.onClick}>登录</button>
                </div>
            </div>
        )
    }
}

export default LoginForm