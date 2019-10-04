import React from 'react';
class SelectType extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: "standard"};
  
      this.handleChange = this.handleChange.bind(this);
    //  this.handleSubmit = this.handleSubmit.bind(this);
    }
  //zmienic uwzględniając lifecycle
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
   /* handleSubmit(event) {
      event.preventDefault();
    }*/
  
    render() {
      return (
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="standard">STANDARD</option>
              <option value="VIP">VIP</option>
            </select>
         // <input type="submit" value="Wyślij" />
      );
    }
  }
  export default SelectType;