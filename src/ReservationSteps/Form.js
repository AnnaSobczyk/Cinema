import React from 'react';
class Form extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      name:'',
      lastName:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (e) {
   this.props.onChange(e.target.name, e.target.value)
  }
  
  render () {
    return (
      <form>
      
        <label>Email</label>
        <input type="text" name="email" onChange={this.handleChange} />
        
        <label>Name</label>
        <input type="text" name="Name" onChange={this.handleChange} />

        <label>Last name</label>
        <input type="text" name="Last name" onChange={this.handleChange} />
        
        
      </form>
    );
  }
}
export default Form; 