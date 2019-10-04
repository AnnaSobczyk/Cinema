import React from 'react';
class SelectType extends React.Component {
    constructor(props) {
      super(props);
     // this.state = {types:[] };
  
      this.handleChange = this.handleChange.bind(this);
    //  this.handleSubmit = this.handleSubmit.bind(this);
    }
  //zmienic uwzględniając lifecycle
  handleChange(e) {
      this.props.onChange(e.target.value);
    //  this.setState({[e.target.name]: e.target.value})
      console.log(`${e.target.name}:${e.target.value}`)
    }
  build(){
    const selected=[...this.props.selected];
    return  selected.map(s=>(<select name={`${s.column+1}${s.row+1}`}  onChange={this.handleChange}>
                                          <option selected value="standard">STANDARD</option>
                                          <option value="VIP">VIP</option>
                                         </select>))
  }
   /* handleSubmit(event) {
      event.preventDefault();
    }*/
  
    render() {
      return (
            <div>
              {this.build()}
            </div>
         // <input type="submit" value="Wyślij" />
      );
    }
  }
  export default SelectType;
  //lepiej chyba to umieścić bezpośrednio w reservation, bez ticketaccept