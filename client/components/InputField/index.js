import React, { Component } from 'react'
import classnames from 'classnames'

class InputField extends Component {

    render() {
        const { label, type, name, value, error, onChange, placeholder } = this.props
        return (
            <div className={classnames("form-group", { "has-error" : error})}>
                <label className="control-label">
                    {label}
                </label> 
                <input 
                    className="form-control"
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {error && <span className="help-block">{error}</span>}
            </div>
        )
    }
}

InputField.defaultProps = {
    type : 'text'
}


export default InputField