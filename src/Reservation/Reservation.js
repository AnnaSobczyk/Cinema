import React from 'react';
import "./Reservation.css";
import Seats from "../Seats/Seats.js";
import ReservedSeats from "../ReservedSeats/ReservedSeats.js";

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
            selectedSeats: []
        }
      }

    componentDidMount(){
        // get information about room
        this.setState(getReservationData());
        console.log(this.props);
        //this.props.match.params.screeningId //Id, które Ci potrzeba
    }

    onSeatClick(row, column) {
        if(this.state.selectedSeats.findIndex(seat => seat.row === row && seat.column === column) > -1) {
            this.setState({
                selectedSeats: this.state.selectedSeats.filter(seat => !(seat.row === row && seat.column === column))
            })
        } else {
            this.setState({
                selectedSeats: this.state.selectedSeats.concat({row: row, column: column}),
            })
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
                <button className="close-button" type="button" onClick={ (e) => this.onHideReservation() }>CLOSE</button>
            </div>
        )
    }
}

export default Reservation;