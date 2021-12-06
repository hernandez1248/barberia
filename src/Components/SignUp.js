import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ref, set } from 'firebase/database';
import { withRouter } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Alert from './Alert'

import { database } from "././Config/firebaseConfig";

const theme = createTheme();

const SignUp = (props) => {

  const auth = getAuth();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
});

const [alertMessage, setAlertMessage] = useState(null);

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    });  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(response => {
      // guardar los datos del usuario
       delete user.password;
       set(ref(database, `users/${response.user.uid}`), user); 
      //alert('Registro exitoso, Bienvenido a nuestra Barberia..!!');
      setAlertMessage({
        type: 'success',
        message: 'Registro exitoso, Bienvenido a nuestra Barberia..!!'
      }); 
      props.history.push('/services');
    })
    .catch(error => {
      console.log(error);
      //alert(error.message);
      setAlertMessage({
        type: 'error',
        message: error.message
      });
    });
   };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar component="h1" variant="h4" sx={{ width: 106, height: 106, m: 1, color: 'black', textAlign: 'center' }}>
            Barbería Salmeron
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
            Registrate
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography component="h1" variant="h6" sx={{fontWeight: 'bold'}} >
                  Nombre
                </Typography>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  placeholder ="name"
                  value={user.name}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6" sx={{fontWeight: 'bold'}} >
                    Correo Electrónico
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder = "name@example.com"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6"sx={{fontWeight: 'bold'}} >
                    Contraseña
                </Typography>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder ="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Comenzar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {alertMessage && 
          <Alert
            type={alertMessage.type}
            message={alertMessage.message}
            autoclose={5000}
          />
        }
      </Container>
    </ThemeProvider>
  );
};

export default withRouter(SignUp);