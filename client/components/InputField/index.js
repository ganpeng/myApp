import React, { Component } from 'react'

class InputField extends Component {

    render() {
        const { label, type, name, value, error, onChange, placeholder } = this.props
        return (
            <div className="form-group">
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
            </div>
        )
    }
}

InputField.defaultProps = {
    type : 'text'
}


export default InputField