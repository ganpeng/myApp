import React, {Component} from 'react';
import { connect } from 'react-redux'


import { getMovie } from '../../actions/movie'



class MyMovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies : [],
            error : ''
        }
    } 

    componentDidMount() {
        const userId = this.props.auth.user.id
        this.props.getMovie(userId)
            .then((res) => {
                if (res.data.success) {
                    this.setState({
                        movies : res.data.movies
                    })
                } else {
                    this.setState({
                        error : res.data.error
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { movies, error } = this.state

        const moviesList = movies.map((movie) => {
            return <li key={movie.id} className="list-group-item">{movie.name}</li>
        })

        return (
            <ul className="list-group">
                {
                    moviesList
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, { getMovie })(MyMovieList)