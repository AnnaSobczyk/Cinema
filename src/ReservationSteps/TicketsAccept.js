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
     
        return (
            <span>
            <div>{/*na selectedseats*/ this.props.children}</div>
           {/* <div>opcjonalny, z typami biletów
             <SelectType selected={this.props.selected} onChange={this.handleChange}/>
            </div>
            <div>ceny</div>
           <div>razem</div>*/}
        {/*<button type="submit" onClick={this.handleSubmit}>ok</button>*/}
            </span>
            
        )
    }
}
export default TicketsAccept;
