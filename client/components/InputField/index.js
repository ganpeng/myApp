'use strict'

import React, { Component } from 'react'
import classnames from 'classnames'

class InputField extends Component {
    render() {
        const { type, placeholder, value, onChange, name, error } = this.props
        return (
            <div className={classnames("form-group", { "has-error" : error })}>
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
                    {error && <span className="help-block">{error}</span> }
                </div>
            </div>
        )
    }
}

export default InputField