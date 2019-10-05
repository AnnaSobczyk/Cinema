import React from 'react';
import Repertoire from "../Repertoire/Repertoire.js";
import moment from 'moment';
import instance from '../axiosInstance';
import "./ListOfRepertoires.css";

const getAllMovies = async () =>{
  try
  {
    const movies = [];
    const response = await instance.get('/api/movies'); // pobranie listy filmów, w postaci {id: xx, movie_id: xx }
     const data = response.data.map(async  (d) => await (instance.get(`/api/movies/${d.movie_id}`)));

     for(let i = 0; i< data.length; ++i) // wydaje się być głupim sposobem ale jedynym jaki mi zadziałał ...
     {
       let res;
       await data[i].then(r => res = r);
        movies.push(res.data);
     }

     return movies;
  }
  catch(err)
  {
      console.log(err);
  }
}
const getMovies = async (allMovies, date) => {
  const date2 = moment(date).format("DD.MM.YYYY"); //
  const movieDate = allMovies[0].screenings[0].date;
  const momentMovieDate = moment(movieDate).format("DD.MM.YYYY");

  return allMovies;
}
class ListOfRepertoires extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            repertoires: [],
        };
        this.allMovies = [];
        this.markedDate = null;
    }

    async componentDidMount(){
      this.allMovies = await getAllMovies();
      const showMovies = await getMovies(this.allMovies, "05.10.2019");
      this.setState({repertoires: showMovies});
      this.markedDate = document.querySelector(".date");
      this.markedDate.style.backgroundColor = "rgba(90,90,90,0.8)";
    }

    async showMoviesForDay(e, date){
        this.markedDate.style.backgroundColor = "transparent";
        e.currentTarget.style.backgroundColor = "rgba(90,90,90,0.8)";
        this.markedDate = e.currentTarget;
        console.log(date);
        const movies = await getMovies(this.allMovies, date);
        this.setState({repertoires: movies})
    }

    renderComponent() {
            return (
                <div id="container">
                    <p style = {{fontSize: "30px", color: "white"}}>Movies</p>
                    <div id="dateForm">
                        {
                            [0,1,2,3,4,5].map(d => <div key = {d} className = "date" onClick = {(e) => this.showMoviesForDay(e, moment().clone().add(d, "day").format("DD.MM.YYYY"))}>
                                                {moment().clone().add(d, "day").format("DD.MM")}
                                            </div>
                                            )
                        }

                    </div>
                    {
                        this.state.repertoires.map((r, idx) => <Repertoire  key={idx} movieDetails = {r}/>) //onShowReservation = { this.onShowReservation.bind(this) }
                    }
                </div>
            );
    }
    render(){
        return (
            <div className="div-wraper">
                { this.renderComponent() }
            </div>
        );
    }
}

export default ListOfRepertoires;




