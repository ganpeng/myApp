import React, { Component } from 'react'

import InputField from '../InputField'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : '',
            email : '',
            confirmPassword : '',
            errors : {}
        }

        this.onChange = this.onChange.bind(this) 
        this.onClick = this.onClick.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onClick() {
        console.log(this.state)
    }

    render() {
        const { username, password, email, confirmPassword, errors } = this.state
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
                        <button type="button" className="btn btn-lg btn-primary" onClick={this.onClick}>提交</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpForm