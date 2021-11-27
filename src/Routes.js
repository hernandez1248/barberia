import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Services from './Components/Services';
import Login from './Components/Login';
import Works from './Components/Admin/index'
import Location from './Components/location';

const Routes = () =>(
    <Switch>
        <Route exact path = "/signup" component={SignUp}/>
        <Route exact path = "/services" component={Services}/>
        <Route exact path= "/login" component= {Login} />
        <Route exact path="/location" component={Location}/>
        <Route exact path="/agregar" component={Works}/>
    </Switch>
);

export default Routes;
