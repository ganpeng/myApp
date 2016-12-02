'use strict'

import React, { Component } from 'react'
import classnames from 'classnames'

import InputField from '../InputField'

class VerificationCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCountDownIng : false,
            totalCount : 10 
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(e) {
        e.preventDefault()
        const { isCountDownIng } = this.state
        const phone = this.props.phone
        if (isCountDownIng) {
            return false
        }
        this.rendCountDown()
        this.props.getVerificationCode({phone})
    }

    rendCountDown() {
        let { totalCount } = this.state
        let timer = setInterval(() => {
            if (totalCount > 0) {
                this.setState({
                    totalCount : totalCount--,
                    isCountDownIng : true
                })
            } else {
                clearInterval(timer)
                this.setState({
                    isCountDownIng : false,
                    totalCount : 10
                })
            }
        }, 1000)
    } 


    render() {
        const { type, placeholder, value, onChange, name, error } = this.props
        return (
            <div className={ classnames("form-group", { "has-error" : error }) }>
                <label className="control-label col-offset-md-4 col-md-4">
                    验证码: 
                </label>
                <div className="col-md-2">
                    <input 
                        type={type} 
                        name={name}
                        className="form-control"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                    {error && <span className="help-block">{error}</span> }
                </div>
                <div className="col-md-2">
                    <button disabled={this.state.isCountDownIng}  type="button" className="btn btn-primary" onClick={this.onClick}>
                        {
                            this.state.isCountDownIng ? `倒计时${this.state.totalCount}` : '获取验证码'
                        }
                    </button>
                </div>
            </div>
        )
    }
}


export default VerificationCode