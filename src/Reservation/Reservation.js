import React from 'react';
import "./Reservation.css";
import Seats from "../Seats/Seats.js";
import ReservedSeats from "../ReservedSeats/ReservedSeats.js";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const getReservationData = async (movieId, screeningId) => {
    const response = await axios.get(`http://localhost:3001/api/screenings/${movieId}/${screeningId}`);
    return {
        time: moment(response.data.date).format('DD MMMM YYYY, HH:mm:ss'),
        movieName: response.data.movie.title || "",
        rows: response.data.details.screening_room.rows,
        columns: response.data.details.screening_room.columns,
        takenSeats: response.data.details.reserved_seats
    };
}

class Reservation extends React.Component {
    constructor() {
        super();
          this.state = {
            time: new Date(),
            movieName: "",
            rows: 0,
            columns: 0,
            takenSeats: [],
            selectedSeats: [],
            isAlert: false
        }
      }

    async componentDidMount(){
        this.setState(await getReservationData(this.props.match.params.movieId, this.props.match.params.screeningId));
    }

    onSeatClick(row, column) {
        if(this.state.selectedSeats.findIndex(seat => seat.row === row && seat.column === column) > -1) {
            this.setState({
                selectedSeats: this.state.selectedSeats.filter(seat => !(seat.row === row && seat.column === column))
            })
        } else {
            if(this.state.selectedSeats.length < 8){
                this.setState({
                    selectedSeats: this.state.selectedSeats.concat({row: row, column: column}),
                })
            }else {
                this.setState({
                    isAlert: true,
                })
                setTimeout(() => { 
                    this.setState({
                        isAlert: false,
                    }) 
                }, 2000);
            }
        }
    }

    render() {
        return (
            <div className="reservationContainer">
                <p className="h1"> Seat Reservation</p>
                <p className="h2">{this.state.movieName}</p>
                <p className="h2">{String(this.state.time)}</p>
                { this.state.isAlert ? <div className="alert">You can book up to 8 seats!</div> : ""}
                <Seats
                    rows = { this.state.rows }
                    columns = { this.state.columns }
                    taken = { this.state.takenSeats }
                    selected = { this.state.selectedSeats }
                    onSeatClick = { this.onSeatClick.bind(this) }
                />
                <ReservedSeats
                    selected = { this.state.selectedSeats }
                />
                <div className="button-group">
                    <button className="close-button" type="button"><Link className="link-button" to='/repertoires'>Close</Link></button>
                    <button className="close-button" type="button"><Link className="link-button" to='/'>Book selected seats</Link></button>
                </div>
            </div>
        )
    }
}

export default Reservation;