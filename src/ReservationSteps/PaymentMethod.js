import React from 'react';
class PaymentMethod extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
         
        };
       
      }
      CouponCheck(c){
          if(c.length!==8)return false;
          else if(c%16!==0)return false;
          return true;
      }
      handleChange(e){
        
      }
    render(){
        return (<div>
            <div>
                <p>Zapłać z użyciem serwisu</p>
                <a><button>Zapłać przez...</button></a>
            </div>
            <div>
                <p>Wykorzystaj kupon</p>
                {/*input Coupon*/}
                <label>Email</label>
            <input type="text" name="coupon" onChange={this.handleChange} />
            </div>
        </div>)
    }
}



export default PaymentMethod;