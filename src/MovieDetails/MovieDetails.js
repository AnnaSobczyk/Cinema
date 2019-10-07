import React from 'react';
import FilmComments from '../FilmComments/FilmComments';

import './MovieDetails.css';
class MovieDetails extends React.Component{
    render(){
        return( 
            <div className="info">
                <div>
                    <h1>Komentarze na temat filmu</h1>
                </div>
                <FilmComments />
            </div>)
    }
}

export default MovieDetails;