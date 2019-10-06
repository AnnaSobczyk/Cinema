import React from 'react';
import "./Legend.css";

class Legend extends React.Component {
    render() {
        return (
            <div className="legendContainer">
                <p className="h3">Legend</p>
            <div className="seatsContainer">
                <table className="seatsTable">
                    <tbody>
                        <tr>
                            <td className="available legendSeat"></td>
                            <td style={{width: "5rem", color: "white"}}>
                                Available
                            </td>
                            <td className="selected legendSeat"> </td>
                            <td style={{width: "5rem", color: "white"}}>
                                Selected
                            </td>
                            <td className="taken legendSeat"> </td>
                            <td style={{width: "5rem", color: "white"}}>
                                Occupied
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default Legend;