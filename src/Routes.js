import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Services from './Components/Services';
import Login from './Components/Login';
import Reservation from './Components/Reservation';

const Routes = () =>(
    <Switch>
        <Route exact path = "/signup" component={SignUp}/>
        <Route exact path = "/services" component={Services}/>
        <Route exact path= "/login" component= {Login} />
        <Route exact path = "/reservation" component = {Reservation}/>
    </Switch>
);

export default Routes;
