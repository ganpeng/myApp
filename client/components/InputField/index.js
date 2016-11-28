'use strict'

import React, { Component } from 'react'

class InputField extends Component {
    render() {
        const { type, placeholder, value, onChange, name } = this.props
        return (
            <div className="form-group">
                <label className="control-label col-offset-md-4 col-md-4">
                    手机号:
                </label>
                <div className="col-md-4">
                    <input 
                        type={type} 
                        name={name}
                        className="form-control"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </div>
        )
    }
}

export default InputField