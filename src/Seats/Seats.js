import React from 'react';
import "./Seats.css";

class Seats extends React.Component {
    createTable = () => {
        let table = []
        table.push(<tr key={"screen"}><th colSpan="{this.props.rows}" className="screen">SCREEN</th></tr>)
        for (let r = 0; r < this.props.rows; r++) {
            let children = []
            children.push(
                <td
                    className='label'
                    key={"label" + r}> {`${r + 1}`}
                </td>
            )

            for (let c = 0; c < this.props.columns; c++) {
                children.push(
                    <td
                        className={this.props.selected.findIndex(i => i.row === r && i.column === c) > -1 
                            ? 'selected'
                            : this.props.taken.findIndex(i => i.row === r && i.column === c) > -1 
                            ? 'taken'
                            : 'available'}
                        key={10 * r + c} 
                        onClick={this.props.taken.findIndex(i => i.row === r && i.column === c) > -1 
                            ? null 
                            : (e) => this.onSeatClick(r, c)}>{`${c + 1}`}
                    </td>
                )
            }
            table.push(<tr key={"row" + r}>{children}</tr>)
        }
        return table
    }

    render() {
        return (
            <div className="seatsContainer">
                <table className="seatsTable">
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
            </div>
        )
    }
    
    onSeatClick(r, c) {
        this.props.onSeatClick(r, c);
    }
}

export default Seats;