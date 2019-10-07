import React from 'react';
import "./Reservation.css";
import Seats from "../Seats/Seats.js";
import Legend from "../Legend/Legend.js";
import ReservedSeats from "../ReservedSeats/ReservedSeats.js";
import Result from "../ReservationSteps/Result";
import PaymentMethod from "../ReservationSteps/PaymentMethod";
import TicketsAccept from "../ReservationSteps/TicketsAccept"
import ReservationPage from "../Tools/ReservationPage";
import Form from '../ReservationSteps/Form';

import instance from '../axiosInstance';
import { Link } from "react-router-dom";
import moment from "moment";

const getReservationData = async (movieId, screeningId) => {
    const response = await instance.get(`/api/screenings/${movieId}/${screeningId}`);
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
            seatsSelected:false,
            ticketsAccepted:false,
            authenticated:false,
            //user:null,
            paymentMethod:null,
            paymentCompleted:false,
            
            isAlert: false
        }
        this.handleChange=this.handleChange.bind(this);
        this.paymentMethod=this.paymentMethod.bind(this);
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
                }, 3000);
            }
        }
    }
    handleChange(name,val){
        this.setState({ [name]: val })
    }
    paymentMethod(val){
        this.setState({paymentMethod:val})
    }
    
  //  onHideReservation(){
  //      console.log("Reservation onHideReservation")
    //    this.props.onHideReservation();
  //  }

      onSelected(){
         console.log("Seats selected");
        this.setState({seatsSelected:true});
      }
        //this.setState({ticketTypes:});

    // }
   onAccepted(){
     console.log("Tickets accepted")
      this.setState({ticketsAccepted:true});  
    }
    //trzeba zmienić nazwę, jeśli nie będzie logowanie
    onAuthenticated(){
    //    console.log("User authenticated")
         this.setState({authenticated:true});
    }
    onPaymentMethod(){
       console.log("Payment method chosen");
       this.setState({paymentMethod:this.props.payment});
     }
    onPaymentCompleted(){
      console.log("Payment completed");
      this.setState({paymentCompleted:true});
     }

    render() {
        /*return (
            <div className="reservationContainer">
                <p className="h1"> Seat Reservation</p>
                { this.state.movieName? <p className="h2">{this.state.movieName}</p> : ""}
                <p className="h2">{String(this.state.time)}</p>
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
////!!!!!!!tu coś się porobiło-porównać z developem
                { this.state.isAlert ? <div className="alert">You can book up to 8 seats!</div> : ""}
                <Legend/>
                <div className="page-bottom">
                    <ReservedSeats
                        selected = { this.state.selectedSeats }
                    />
                    <div className="button-group">
                        <button className="close-button" type="button"><Link className="link-button" to='/repertoires'>Close</Link></button>
                        <button className="close-button" type="button"><Link className="link-button" to='/'>Book selected seats</Link></button>
                    </div>
                </div>

            </div>
        )*/
        if(!this.state.seatsSelected)
         {  return (
                <ReservationPage movieTitle={this.state.movieName} time={String(this.state.time)} Next={(e)=>this.onSelected()}>
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
                </ReservationPage>
            )
         }
        else if(!this.state.ticketsAccepted)
        {
            // tu  <TicketsAccept/>
            return(
              
              <ReservationPage  movieTitle={this.state.movieName} time={String(this.state.time)} Next={(e)=>this.onAccepted()}>
                   <p>Selected seats:</p> 
                   <TicketsAccept selected={this.state.selectedSeats}>
                   <ReservedSeats 
                       selected = { this.state.selectedSeats }
                  />
                  </TicketsAccept>
                </ReservationPage>
              
            )
        }else if(!this.state.authenticated)
       //tu <SignIn/>
        {
            return(
               
                <ReservationPage  movieTitle={this.state.movieName} time={String(this.state.time)} Next={(e)=>this.onAuthenticated()}>
           
                <Form onChange={this.handleChange}/>
            </ReservationPage>
               
            )
        }else if(!this.state.paymentMethod){
            return(
            
               // <PaymentMethod/>
               <ReservationPage  movieTitle={this.state.movieName} time={String(this.state.time)} Next={(e)=>this.onPaymentMethod()}>
              <PaymentMethod method={this.paymentMethod}/>
           </ReservationPage>
            )
        }
        
        return (
        //<Result/>
        <ReservationPage  movieTitle={this.state.movieName} time={String(this.state.time)} Next={(e)=>this.onPaymentCompleted()}>
        <Result result={this.state.paymentCompleted}/>
    </ReservationPage>
        )

    }
}

export default Reservation;