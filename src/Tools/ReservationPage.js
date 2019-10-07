import React from 'react';
class reservationPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(<div className="reservationContainer">

<p className="h1"> Reservation:{this.props.movieTitle}</p>
<p className="h2">{this.props.time}</p>

{this.props.children}
{/*może na razie nie 
<button className="close-button" type="button"onClick={props.Back}>BACK</button>*/}
<button className="select-button button" type="button" onClick={this.props.Next} >NEXT</button>
</div>)
}}
export default reservationPage;