import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './Components/Layout/Header';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header>
         
        </Header>
        <Routes />      
    </Router>
  );
}

export default App;
