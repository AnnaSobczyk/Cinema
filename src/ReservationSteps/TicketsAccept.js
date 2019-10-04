import React from 'react';
class TicketsAccept extends React.Component{
constuctor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this);
    this.state={selected:[],types:""}
}
handleChange(e) {
    this.setState({types: e.target.value});
  }
    render(){
        this.
        return (
            <span>
            <div>{/*na selectedseats*/ this.props.children}</div>
            <div>opcjonalny, z typami biletów
            <input
          onChange={this.handleChange} />
            </div>
            <div>ceny</div>
            <div>razem</div>
            </span>
            
        )
    }
}
export default TicketsAccept;
