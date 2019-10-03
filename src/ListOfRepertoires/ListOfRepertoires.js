import React from 'react';
import Repertoire from "../Repertoire/Repertoire.js";
import moment from 'moment';
import "./ListOfRepertoires.css";

const getFilms = () => {
    return [{movie: "Title", hours: ["11:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15"] },
    {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","21:15", "22:15"] } ,
    {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "23:15"] } ,
    {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "13:15"] } ,
    {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "23:15"] } ,
    {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "21:15"] } ,
    {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "12:15"] } ,
        {movie: "Title", hours: ["12:15", "13:15","16:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "23:15"] }];
}

class ListOfRepertoires extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            repertoire: [],
            // showReservation: false
        };
        this.markedDate = null;
    }

    componentDidMount(){
        if(!this.state.showReservation){
            this.setState({repertoire: getFilms()});
            this.markedDate = document.querySelector(".date");
            this.markedDate.style.backgroundColor = "rgba(90,90,90,0.8)";
        }
    }

    // onShowReservation = (screeningId) => {
    //     this.setState({showReservation: true});
    // }

    // onHideReservation = () =>{
    //     console.log("ListOfRepertoires onHideReservation")
    //     this.setState({showReservation: false});
    // }

    getMoviesForDay(e, date){
        this.markedDate.style.backgroundColor = "transparent";
        e.currentTarget.style.backgroundColor = "rgba(90,90,90,0.8)";
        this.markedDate = e.currentTarget;
        //wywołać zapytanie o filmy z podaną date, i wywołać na danych setstate()
    }

    renderComponent() {
        // if(this.state.showReservation){
        //     return (
        //         <div id="container">
        //             <Reservation onHideReservation = { this.onHideReservation.bind(this) }  />
        //         </div>
        //     );
        // }else {
            return (
                <div id="container">
                    <p style = {{fontSize: "30px", color: "white"}}>Movies</p>
                    <div id="dateForm">
                        {
                            [0,1,2,3,4,5].map(d => <div key = {d} className = "date" onClick = {(e) => this.getMoviesForDay(e, moment().clone().add(d, "day").format("DD.MM.YYYY"))}>
                                                {moment().clone().add(d, "day").format("DD.MM")}
                                            </div>
                                            )
                        }

                    </div>
                    {
                        this.state.repertoire.map((r, idx) => <Repertoire  key={idx} name = {r}/>) //onShowReservation = { this.onShowReservation.bind(this) }
                    }
                </div>
            );
        //}
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