import React, { Component } from 'react'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'

import InputField from '../InputField'
import { signUpValidator } from '../../utils/validator'
import { signUp, setCurrentUser } from '../../actions/user'
import setAuthHeader from '../../utils/setAuthHeader'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : '',
            email : '',
            confirmPassword : '',
            errors : {},
            isLoading:false
        }

        this.onChange = this.onChange.bind(this) 
        this.onClick = this.onClick.bind(this)
    }

    isValid() {
        const { errors, isValid } = signUpValidator(this.state)

        this.setState({
            errors: errors
        })

        return isValid
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onClick() {
        if (this.isValid()) {
            this.setState({errors : {}, isLoading : true})
            this.props.signUp(this.state)
                .then((res) => {
                    this.setState({isLoading: false})
                    if (res.data.success) {
                        const token = res.data.token
                        if (token) {
                            localStorage.setItem('token', token)
                            setAuthHeader(token)
                            this.props.setCurrentUser(jwtDecode(token))
                        }
                    } else {
                        this.setState({
                            errors : Object.assign({}, this.state.erros, res.data.errors)
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    this.setState({isLoading: false})
                })
        }
    }

    render() {
        const { username, password, email, confirmPassword, errors, isLoading } = this.state

        return (
            <div className="col-md-4 col-md-offset-4">
                <h2>SignUp</h2> 
                <div className="form-horizontal">
                    <InputField 
                        label="用户名"
                        name="username" 
                        value={username}
                        placeholder="请输入用户名"
                        error={errors.username}
                        onChange={this.onChange}
                    /> 
                    <InputField 
                        label="邮箱"
                        name="email" 
                        value={email}
                        placeholder="请输入邮箱"
                        error={errors.email}
                        onChange={this.onChange}
                    /> 
                    <InputField 
                        label="密码"
                        name="password" 
                        value={password}
                        type="password"
                        placeholder="请输入密码"
                        error={errors.password}
                        onChange={this.onChange}
                    /> 
                    <InputField 
                        label="确认密码"
                        name="confirmPassword" 
                        value={confirmPassword}
                        type="password"
                        placeholder="请再次输入密码"
                        error={errors.confirmPassword}
                        onChange={this.onChange}
                    /> 
                    <div className="form-group">
                        <button disabled={isLoading} type="button" className="btn btn-lg btn-primary" onClick={this.onClick}>提交</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { signUp, setCurrentUser })(SignUpForm)