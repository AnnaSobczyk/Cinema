import React from "react";
import MovieDetails from '../MovieDetails/MovieDetails';
import "./Repertoire.css";
import { Link } from "react-router-dom";
import moment from "moment";

class Repertoire extends React.Component {

    constructor(props){
        super(props);

        this.movieHoursRef = React.createRef();
        this.state = {ShowMovieDetails: false};
        this.details = this.props.movieDetails.info;
    }
    showMovieDetails = ()=>{
        this.setState({ShowMovieDetails: true});
    }

    hideMovieDetails = () =>{
        this.setState({ShowMovieDetails: false});
    }
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
        if(width <= 720) return "movieHours-small";
        else return "movieHours-big";
    }

    openCloseDetails = (e) =>{
        e.preventDefault();
        this.state.ShowMovieDetails ? this.hideMovieDetails() : this.showMovieDetails();
    }

    OpenReservation(date, screeningId, movieId){
        return <Link className = {`hour  ${this.hourStyle(date)}`} to={`/reservation/${movieId}/${screeningId}`}><p>{this.showHour(date)}</p> </Link>
    }
    ClosedReservation(date){
        return <div className = {`hour ${this.hourStyle(date)}`}><p>{this.showHour(date)}</p></div>
    }

    CanReserve(movieHour){
        const actualHour = moment().format("HH.mm");
        const movieHourHHmm = moment(movieHour).add(-1, "hours").format("HH.mm");

        return actualHour < movieHourHHmm;
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
        const reservation = (screening) => {
            return this.CanReserve(screening.date)
            ? this.OpenReservation(screening.date, screening._id, screening.movie)
            : this.ClosedReservation(screening.date);
        }
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
                        this.props.movieDetails.screenings.map((s)=> (
                            <div key={s._id}
                            >
                                {reservation(s)}
                            </div>
                        ))
                    }
                </div>
                    {details(this.details)}
            </div>
        );
    }
}

export default Repertoire;

