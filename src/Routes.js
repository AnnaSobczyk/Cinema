import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Repertoires from './ListOfRepertoires/ListOfRepertoires';
import Reservation from './Reservation/Reservation';
import Home from './Home/Home';

export default function Routes() {
    return (
        <Router>
            <Route exact path ="/" component = {Home} />
            <Route path="/repertoires" component = {Repertoires} />
            <Route path="/reservation/:movieId/:screeningId" component = {Reservation} />
        </Router>
    );
}