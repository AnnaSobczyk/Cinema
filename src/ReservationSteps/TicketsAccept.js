import React from 'react';
import SelectType from '../Tools/SelectType'
class TicketsAccept extends React.Component{
constructor(props){
    super(props)
   // this.handleChange=this.handleChange.bind(this);
    
 //   this.state={types:[]}
}
// handleChange(types) {
//     this.setState({types: types});
//   }
  ///czy konieczne jest handleChange

    render(){
      //przy zal. 10$ bilet
     const total=10*this.props.selected.length;
        return (
            <span>
            <div>{/*na selectedseats*/ this.props.children}</div>
           {/* <div>opcjonalny, z typami biletów
             <SelectType selected={this.props.selected} onChange={this.handleChange}/>
            </div>
            <div>ceny</div>
           <div>razem</div>*/}
        {/*<button type="submit" onClick={this.handleSubmit}>ok</button>*/}
        <p>Total:{total} $</p>
            </span>
            
        )
    }
}
export default TicketsAccept;
