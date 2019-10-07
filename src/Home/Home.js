import React from 'react'
import Popular from '../components/Popular';
import './home.css';
const axios = require('axios');

export default class Home extends React.Component {
		state = {
			popularMovies: [],
		}

    componentDidMount() {
			 axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=336f4ef1df47e842d0d2870c07a6d5ed&language=en-US&page=1`)
				.then((response) => {
					this.setState({
						popularMovies: response.data.results,
					})
				})
				.catch(function (error) {
					console.log(error);
				});
		}

   render () {
       return (
           <div className="home">
							 <div className="container">
							 	<h1>Welcome to our brand new Village Cinema</h1>
                <h2>Feel free to find what's you want and watch what you found...</h2>
								<Popular popularMovies={this.state.popularMovies}/>
							 </div>
           </div>
       )
   }
}