import React from "react";
import { Router, Route } from 'react-router-dom';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Barberia from './Barberia';

const Routes = () => (
<Router>
    <Route exact path= "/" component= {Barberia} />
    <Route exact path= "/login" component= {Login} />
    <Route exact path= "/signup" component= {Signup} />
</Router>
    );

export default Routes;
