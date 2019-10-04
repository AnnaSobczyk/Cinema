import React from 'react';
import "./Reservation.css";
import Seats from "../Seats/Seats.js";
import ReservedSeats from "../ReservedSeats/ReservedSeats.js";
import Result from "../ReservationSteps/Result";
import PaymentMethod from "../ReservationSteps/PaymentMethod";
import SignIn from "../ReservationSteps/SignIn";
import TicketsAccept from "../ReservationSteps/TicketsAccept"

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
            seatsSelected:false,
            ticketsAccepted:false,
            authenticated:false,
            //user:null,
            paymentMethod:null,
            paymentCompleted:false,
            ticketTypes:[]
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

    // onSelected(){
    //     console.log("Seats selected");
    //     this.props.onHideReservation();
    //     this.setState({seatsSelected:true});
    //     this.setState({ticketTypes:});

    // }
    // onTicketsAccepted(){
    //     console.log("Tickets accepted")
    //     this.setState({ticketsSelected:true});
    // }
    // onAuthenticated(){
    //     console.log("User authenticated")
    //     this.setState({authenticated:true});
    // }
    // onPaymentMethod(){
    //     console.log("Payment method chosen");
    //     this.setState({paymentMethod:this.props.payment});
    // }
    // onPaymentCompleted(){
    //     console.log("Payment completed");
    //     this.setState({paymentCompleted:true});
    // }

    render() {
        /*return (
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
                <button className="select-button" type="button" onClick={(e)=>this.onSelected()} >SELECT SEATS</button>
            </div>
        )*/
        if(!this.state.seatsSelected)
         {  return (
                //przydałby sie dodatkowy komponent do otoczki
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
                    <button className="select-button" type="button" onClick={(e)=>this.onSelected()} >SELECT SEATS</button>
                </div>
            )
         }
        else if(!this.state.ticketAccepted)
        {
            return(
                //tego jeszcze nie ma
                {/*<ReservedSeats selected={this.state.selectedSeats}*/}
                <TicketsAccept/>
            )
        }else if(!this.state.authenticated){
            return(
                //tego też nie ma 
                <SignIn/>
            )
        }else if(!this.state.paymentMethod){
            return(
                //tego też nie ma 
                <PaymentMethod/>
            )
        }
        //i tego też nie ma
        return <Result/>

    }
}

export default Reservation;