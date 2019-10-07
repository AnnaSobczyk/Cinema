import React from 'react';
import "./ReservedSeats.css";
    
class ReservedSeats extends React.Component {
    createList(){
        const sorted = [...this.props.selected].sort((s1, s2) => { return (s1.row - s2.row) || (s1.column - s2.column) });
        sorted.forEach(s => s.stirng = `Row ${s.row + 1} Seat ${s.column + 1}`);
        return sorted.map(function(elem){ return elem.stirng; }).join(", ")
    }

    render() {
        return(
        <div className="selectedSeats">
            <h4 className="h2">Selected seats: ({this.props.selected.length})</h4>
            <p key="listOfSeats" >
                {this.createList()}
            </p>
        </div>
        )
    }
}

export default ReservedSeats;