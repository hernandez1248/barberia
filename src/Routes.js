import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Services from './Components/Services';
import Login from './Components/Login';
import Reservation from './Components/Reservation';
import Reserve from './Components/Reserve';
import Works from './Components/Admin/index'
import Location from './Components/Location';
import ServicesForm from './Components/Admin/ServicesForm';
import Index from './Components/Index';

const Routes = () =>(
    <Switch>
        <Route exact path= "/" component= {Index} />
        <Route exact path = "/signup" component={SignUp}/>
        <Route exact path = "/services" component={Services}/>
        <Route exact path= "/login" component= {Login} />
        <Route exact path = "/reservation" component = {Reservation}/>
        <Route exact path="/location" component={Location}/>
        <Route exact path="/admin" component={Works}/>
        <Route exact path= "/reserve" component= {Reserve} />
        <Route exact path= "/admin/agregar" component= {ServicesForm} />
        <Route exact path= "/admin/editar" component= {ServicesForm} />
    </Switch>
);

export default Routes;
