import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Services from './Components/Services';

const Routes = () =>(
    <Switch>
        <Route exact path = "/signup" component={SignUp}/>
        <Route exact path = "/services" component={Services}/>
    </Switch>
);

export default Routes;