import React from 'react'

const MovieItem = ({poster}) => {
    return (
        <div className="movie-item">
            <div className="image">
                <img src={`https://image.tmdb.org/t/p/original/${poster}`}/>
            </div>
        </div>
    )
}

export default MovieItem;