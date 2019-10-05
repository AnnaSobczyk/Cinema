import React from 'react'
import Navbar from '../components/Navbar';
import './home.css';

export default class Home extends React.Component {
   render () {
       return (
           <div className="home">
               <Navbar/>
                <h1>Welcome to our brand new Village Cinema</h1>
                <h2>Feel free to find what's you want and watch what you found...</h2>
           </div>
       )
   }
}