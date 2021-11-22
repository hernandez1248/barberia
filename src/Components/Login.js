import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';


const UseStyles = makeStyles(theme =>({
  '@global': {
    borderStyle:{
      backgroundColor: "#fff",
    },
  },
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: 8,
  },
}));

const Login = () => {
 
  const classes = UseStyles();



   return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar component="h1" variant="h4" 
      alignItems= "center" className={classes.avatar}
      sx={{
        width: '100px',
        height: '100px',
        color: 'black',
      }} >
        <center> Barbería Salmeron </center>
      </Avatar>
        <Typography component="h1" variant="h4"
        sx={{fontWeight: 'bold'}}>
          Iniciar Sesión
        </Typography>
        <form className={classes.form} >
        <Typography component="h1" variant="h5"
        sx={{fontWeight: 'bold'}}>
          Correo Electrónico
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder ="name@example.com"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Typography component="h1" variant="h5" 
          sx={{fontWeight: 'bold'}}>
            Contraseña
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder = "Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            component="h1"
            sx={{
              marginTop: 4
            }}
          >
            Iniciar Sesión
          </Button>
          <Grid container>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ background: '#717171' }}
            sx={{
              marginTop: 2
            }}
          >
            Regístrate
          </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default Login;

