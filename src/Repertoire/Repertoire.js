import React from "react";
// import ReactDOM from 'react-dom'
import MovieDetails from '../MovieDetails/MovieDetails';
// import Modal from '../Modal/Modal.js';
import "./Repertoire.css";
// import Reservation from "../Reservation/Reservation";
import { Link } from "react-router-dom";
import moment from "moment";

class Repertoire extends React.Component {

    constructor(props){
        super(props);

        this.movieHoursRef = React.createRef();
        this.state = {ShowMovieDetails: false};
        this.details = this.props.movieDetails.info;
        // console.log(this.props.movieDetails._id);
        // console.log(this.details._id);
    }
    showMovieDetails = ()=>{
        this.setState({ShowMovieDetails: true});
    }

    hideMovieDetails = () =>{
        this.setState({ShowMovieDetails: false});
    }

    // nie działa przy wyświetlaniu rezerwacji, ale nie jestem pewna co zmienić
    onResize = () =>{
        this.movieHoursRef.current.className = this.hoursView();
    }

    componentDidMount(){
        window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.onResize);
    }
    hoursView = ()=> {
        const width = window.innerWidth;
        if(width <= 1285) return "movieHours-small";
        else return "movieHours-big";
    }

    openCloseDetails = (e) =>{
        e.preventDefault();

        // ReactDOM.createPortal(<MovieDetails />, document.querySelector('#modal'));
        this.state.ShowMovieDetails ? this.hideMovieDetails() : this.showMovieDetails();
    }

    OpenReservation(e, screeningId){
        //Wstawić komponent Iwony
        // <Link to={`http://localhost:3000/rendering/${screeningId}`}>Rendering with React</Link>
        // Potrzebuję tutaj od dostać od Ciebie ID seansu (tego obiektu co ma przypisaną salę do godziny)
       // this.props.onShowReservation(screeningId);
    }

    CanReserve(movieHour){

        // return true;
        // console.log(movieHour);
        const date = new Date();
        let actualHour = date.getHours();
        const actualMinutes = date.getMinutes();
        const obj = movieHour.split(":"); //obj[0] - zawiera godzine, obj[1] - zawiera minute
        if(actualHour >= obj[0] )
            return false;
        actualHour++;
        if(actualHour === obj[0])
            return actualMinutes < obj[1];
        return true;
    }
    hourStyle(movieHour){
        return this.CanReserve(movieHour) ? "hourOpened" : "hourBlocked";
    }
    showHour(date){
        const movieDate = moment(date);
        return movieDate.format("kk:mm");
    }
    render() {
        const details = (d) =>this.state.ShowMovieDetails
            ? <MovieDetails details={d}/>
            : null;
        return (
            <div className="single">
                <div id="movieInfo" onClick = {this.openCloseDetails} >
                    <div id="movie-img" style={{backgroundImage: `url(${this.details.Poster})`}}>
                    </div>
                    <div id="movieDetails">
                        <div id="movieTitle">
                            <p>{this.details.Title}</p>
                        </div>
                        <div>
                            <div id="movieDuration">
                                <p><span style={{fontWeight: "bold", fontSize: "17px"}}>Czas trwania:</span> {this.details.Runtime}</p>
                            </div>
                            <div id="movieMinAge">
                                <p><span style={{fontWeight: "bold", fontSize: "17px"}}>Gatunek:   </span>{this.details.Genre}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div ref={this.movieHoursRef} id="movieHours" className = {this.hoursView()}>
                    {
                        this.props.movieDetails.screenings.map((s)=> <div key={s._id}
                            onClick = {this.CanReserve(s.date) ? (e) => this.OpenReservation(e) : null}
                            >
                                <Link className = {`hour  ${this.hourStyle(s.date)}`} to={`/reservation/${s.movie}/${s._id}`}><p>{this.showHour(s.date)}</p> </Link>
                            </div>
                        )
                    }
                </div>
                    {details(this.details)}

            </div>
        );
    }

}


export default Repertoire;

