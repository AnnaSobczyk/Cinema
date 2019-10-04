import React from 'react';
import "./Reservation.css";
import Seats from "../Seats/Seats.js";
import ReservedSeats from "../ReservedSeats/ReservedSeats.js";
import { Link } from "react-router-dom";

const getReservationData = () => {

    
    return {
        rows: 12,
        columns: 20,
        takenSeats: [
            {row: 2, column: 2},
            {row: 2, column: 3},
            {row: 2, column: 4},
            {row: 4, column: 12},
            {row: 4, column: 13},
            {row: 4, column: 14},
            {row: 4, column: 15},
        ]
    };
}

class Reservation extends React.Component {
    constructor() {
        super();
          this.state = {
            rows: 0,
            columns: 0,
            takenSeats: [],
            selectedSeats: [],
            isAlert: false
        }
      }

    componentDidMount(){
        // get information about room
        this.setState(getReservationData());
        console.log(this.props);
        //this.props.match.params.screeningId //Id, które Ci potrzeba
        console.log(this.props.match);
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

    onHideReservation(){
        console.log("Reservation onHideReservation")
        this.props.onHideReservation();
    }

    render() {
        return (
            <div className="reservationContainer">
                <p className="h1">MOVE NAME - Seat Reservation</p>
                <p className="h2">DD.MM.YY, hh.mm</p>
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