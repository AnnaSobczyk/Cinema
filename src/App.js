import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import Register from './components/Register'
import Repertoires from './ListOfRepertoires/ListOfRepertoires';
import Home from './Home/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/repertoires" component={Repertoires} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={Register} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;