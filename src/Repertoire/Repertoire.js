import React from "react";
// import ReactDOM from 'react-dom'
import MovieDetails from '../MovieDetails/MovieDetails';
import Modal from '../Modal/Modal.js';
import "./Repertoire.css";
import Reservation from "../Reservation/Reservation";
import { Link } from "react-router-dom";

class Repertoire extends React.Component {

    constructor(props){
        super(props);

        this.movieHoursRef = React.createRef();
        this.state = {ShowMovieDetails: false};
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
    render() {
        const details = this.state.ShowMovieDetails
            ? <MovieDetails />
            : null;
        return (
            <div className="single">
                <div id="movieInfo" onClick = {this.openCloseDetails} >
                    <div id="movie-img">
                    </div>
                    <div id="movieDetails">
                        <div id="movieTitle">
                            <p>{this.props.name.movie}</p>
                        </div>
                        <div>
                            <div id="movieDuration">
                                <p>Czas trwania: 140 min</p>
                            </div>
                            <div id="movieMinAge">
                                <p>Minimaly wiek: 15</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div ref={this.movieHoursRef} id="movieHours" className = {this.hoursView()}>
                    {
                        this.props.name.hours.map((h,idx)=> <div key={idx} onClick = {this.CanReserve(h) ? (e) => this.OpenReservation(e) : null}> <Link className = {`hour  ${this.hourStyle(h)}`} to={`/reservation/${5555}`}><p>{h}</p> </Link> </div>)
                    }
                </div>
                    {details}

            </div>
        );
    }

}


export default Repertoire;

