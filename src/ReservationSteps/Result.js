import React from 'react';
class Result extends React.Component{
    
    constructor (props) {
        super(props);
        this.state = {
         
        };
       
      }    
    render(){
        if(this.props.result===1)
        {return <p>succes</p>}
        return <p>failed</p>
    }
}
export default Result;