'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import InputField from '../InputField'
import VerificationCode from '../VerificationCode'
import { SignUpValidator } from '../../utils/validator'
import { getVerificationCode } from '../../actions/auth'


class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone : '',
            verificationCode : '',
            errors : {},
            isValid : false
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
        const { errors, isValid } = SignUpValidator(this.state)


        if (isValid) {
            this.setState({
                errors: {},
                isValid : true
            })
        } else {
            this.setState({
                errors,
                isValid
            })
        }
    }

    render() {
        const { phone, verificationCode, isValid, errors } = this.state
        const { getVerificationCode } = this.props
        return (
            <div className="form-horizontal">
                <InputField
                    type="text"
                    name="phone"
                    placeholder="请输入手机号" 
                    value={phone}
                    error={errors.phone}
                    onChange={this.onChange}
                 /> 
                 <VerificationCode
                    type="text"
                    name="verificationCode"
                    placeholder="请输入验证码"
                    value={verificationCode}
                    error={errors.verificationCode}
                    onChange={this.onChange}
                    getVerificationCode={getVerificationCode}
                    phone={phone}
                 />
                 <div className="from-group col-md-offset-4">
                    <button  type="submit" className="btn btn-primary btn-lg" onClick={this.onSubmit}>提交</button>
                 </div>
            </div>
        )
    }
}


export default connect(null, {getVerificationCode})(SignUp)