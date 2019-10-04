import React from 'react';
function reservationPage(props){
    return(<div className="reservationContainer">
<p className="h1">MOVE NAME - Seat Reservation</p>
<p className="h2">DD.MM.YY, hh.mm</p>
{props.children}
{/*może na razie nie 
<button className="close-button" type="button"onClick={props.Back}>BACK</button>*/}
<button className="select-button" type="button" onClick={props.Next} >NEXT</button>
</div>)
}
export default reservationPage;