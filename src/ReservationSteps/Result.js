import React from 'react';
class Result extends React.Component{
    render(){
        if(this.props.result=1)
        {return <p>succes</p>}
        return <p>failed</p>
    }
}
export default Result;