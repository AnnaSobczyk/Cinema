import React from 'react'
import MovieItem from './MovieItem';

const Popular = (props) => {
    const movies = props.popularMovies.slice(0,8);
    return (
        <div className="popular">
            <h3>Most popular movies:</h3>
            <div className="popular-box">
               {
                movies.map(movie => (
                    <MovieItem
                        poster={movie.poster_path}
                        key={movie.title + movie.vote_average}
                    />
                ))
               }
            </div>
        </div>
    )
}

export default Popular;