import React from 'react';
class PaymentMethod extends React.Component{
    render(){
        return (<div>
            <div>
                <p>Zapłać z użyciem serwisu</p>
                <a><button>Zapłać przez...</button></a>
            </div>
            <div>
                <p>Wykorzystaj kupon</p>
                {/*input Coupon*/}
            </div>
        </div>)
    }
}



export default PaymentMethod;