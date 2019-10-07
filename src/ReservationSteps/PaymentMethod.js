import React from 'react';
class PaymentMethod extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
         
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
      
      CouponCheck(c){
          if(c.length!==8)return false;
          else if(c%16!==0)return false;
          return true;
      }
      handleChange(e){
          if(this.CouponCheck(e.target.value)) this.props.method("coupon")
      }
      handleClick(e){
          this.props.method("online")
      }
    render(){
        return (<div>
            <div>
                <p>Pay via online payment system</p>
                {/*przycisk atrapa*/}
                <a><button className="button" onClick={this.handleClick}>Link to payment site</button></a>
                <br/>
            </div>
            <div>
                <br/>
                <p>Use coupon</p>
                {/*input Coupon*/}
                <label>Coupon</label>
            <input type="text" name="coupon" onChange={this.handleChange} />
            </div>
        </div>)
    }
}



export default PaymentMethod;