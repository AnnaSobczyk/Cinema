import React from 'react';
import "./ReservedSeats.css";
    
class ReservedSeats extends React.Component {
    createList(){
        const sorted = [...this.props.selected].sort((s1, s2) => { return (s1.row - s2.row) || (s1.column - s2.column) });
        return sorted.map(s => <p key={10 * s.row + s.column} >{`Row ${s.row + 1} seat ${s.column + 1}`}</p>)
    }

    render() {
        return(
        <div className="selectedSeats">
            <h4>Selected seats: ({this.props.selected.length})</h4>
            {this.createList()}
        </div>
        )
    }
}

export default ReservedSeats;