'use strict'

import React, { Component } from 'react'

import InputField from '../InputField'
import VerificationCode from '../VerificationCode'

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone : '',
            verificationCode : ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
    }

    render() {
        const { phone, verificationCode } = this.state
        return (
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <InputField
                    type="text"
                    name="phone"
                    placeholder="请输入手机号" 
                    value={phone}
                    onChange={this.onChange}
                 /> 
                 <VerificationCode
                    type="text"
                    name="verificationCode"
                    placeholder="请输入验证码"
                    value={verificationCode}
                    onChange={this.onChange}
                 />
                 <div className="from-group col-md-offset-4">
                    <button type="submit" className="btn btn-primary btn-lg">提交</button>
                 </div>
            </form>
        )
    }
}


export default SignUp