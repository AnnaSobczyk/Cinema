import React from 'react';
import "./Reservation.css";
import Seats from "../Seats/Seats.js";
import ReservedSeats from "../ReservedSeats/ReservedSeats.js";
import Result from "../ReservationSteps/Result";
import PaymentMethod from "../ReservationSteps/PaymentMethod";
import SignIn from "../ReservationSteps/SignIn";
import TicketsAccept from "../ReservationSteps/TicketsAccept"
import ReservationPage from "../Tools/ReservationPage";


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
    //zmienmy może ticketsAccepted na Accepted
   onAccepted(){
     console.log("Tickets accepted")
      this.setState({ticketsSelected:true});
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
///back nie działa, dunkcja przystosowana eszcze do wersji bez routa, trzeba zrobić to hrefa
                <ReservationPage Next={(e)=>this.onSelected()}>
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
        else if(!this.state.ticketAccepted)
        {
            // tu  <TicketsAccept/>
            return(
              
              <ReservationPage Next={(e)=>this.onAccepted()}>
                   <p>tu będą wybrane bilety/miejsca</p> 
                   <ReservedSeats 
                       selected = { this.state.selectedSeats }
                  />
                </ReservationPage>
              
            )
        }else if(!this.state.authenticated)
       //tu <SignIn/>
        {
            return(
               
                <ReservationPage Next={(e)=>this.onAuthenticated()}>
                <p> tu będzie formularz</p> 
            </ReservationPage>
               
            )
        }else if(!this.state.paymentMethod){
            return(
                //tego też nie ma 
               // <PaymentMethod/>
               <ReservationPage Next={(e)=>this.onPaymentMethod()}>
              <p> tu będą płatności</p>
           </ReservationPage>
            )
        }
        //i tego też nie ma
        return (
        //<Result/>
        <ReservationPage  Next={(e)=>this.onPaymentCompleted()}>
        <p>tu będzie finalizacja</p>
    </ReservationPage>
        )

    }
}

export default Reservation;