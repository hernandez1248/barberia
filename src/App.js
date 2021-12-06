import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { getAuth,  } from "firebase/auth";
import MenuAppBar from "./Components/Layout/Header";
import Routes from './Routes';

function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  const onLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged(response => {
     
    });
  }, []); 

  return (
    <Router>
      <CssBaseline />
      {user && <MenuAppBar user={user} onLogout={onLogout} />}
        <Routes />      
    </Router>
  );
}

export default App;


