import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';


import Routes from './Routes';

function App() {
  return (
    <Router>
      <CssBaseline />
        <Routes />      
    </Router>
  );
}

export default App;


