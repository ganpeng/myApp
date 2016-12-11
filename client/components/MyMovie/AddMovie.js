import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import InputField from '../InputField'
import { addMovie } from '../../actions/movie'
import { movieValidator } from '../../utils/validator'

class AddMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            desc : '',
            isLoading : false,
            errors : {},
            isSuccess : false
        }
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)

    }

    isValid() {
        const { isValid, errors } = movieValidator(this.state)

        if (!isValid) {
            this.setState({
                errors
            })
        }

        return isValid

    }


    onClick() {
        if (this.isValid()) {
            this.setState({isLoading : true})
            const userId = this.props.auth.user.id
            this.props.addMovie(this.state, userId)
                .then((res) => {
                    this.setState({isLoading : false})
                    if (res.data.success) {
                        this.setState({isSuccess : true})
                    } else {
                        this.setState({isSuccess : false})
                        alert('err')
                    }
                })
                .catch((err) => {
                    this.setState({isLoading : false, isSuccess : false})
                    console.log(err)
                })

        }
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const { name, desc, errors, isSuccess } = this.state
        const failureRender = (
            <div className="row">
                <div className="form-horizontal col-md-6 col-md-offset-3">
                    <h3>添加电影</h3>
                    <InputField 
                        label="电影名"
                        name="name"
                        value={name}
                        placeholder="请输入电影名"
                        error={errors.name}
                        onChange={this.onChange}
                    />
                    <InputField
                        label="电影描述"
                        name="desc"
                        value={desc}
                        placeholder="请输入电影描述"
                        error={errors.desc}
                        onChange={this.onChange}
                     />
                     <div className="form-group">
                        <button className="btn btn-primary btn-lg" onClick={this.onClick}>提交</button>
                     </div>
                </div>
            </div>
        )
        const successRender = (
            <Redirect to="/profile/movie" />
        )
        return (
            <div>
                {
                    isSuccess ? successRender : failureRender                 
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps, { addMovie })(AddMovie)