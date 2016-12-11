import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMovie } from '../../actions'

class Movie extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchMovie()
    }

    render() {
        const { isFetching, error, movies } = this.props.movie
        const movieList = movies.map((movie) => {
            return (
                <li className="list-group-item" key={movie.id}>
                    {movie.name}
                </li>
            )
        })
        return (
            <div>
                <h2>Movie</h2>
                {
                    isFetching && 
                    (<div>
                        <span className="glyphicon glyphicon-refresh"></span>
                    </div>)
                }
                <ul className="list-group">
                    {movieList}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        movie : state.movie
    }
}

export default connect(mapStateToProps, { fetchMovie })(Movie)