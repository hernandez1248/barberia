import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';


const UseStyles = makeStyles(theme =>({
  '@global': {
    borderStyle:{
      backgroundColor: theme.palette.common.white
    },
  },
  paper: {
    marginTop: theme.spacing(),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(),
    width: '35%',
    height: '100px',
    color: 'black',
    negrita: {fontWeight: 'bold'},
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    component: 'h1'
    
  },
}));

const Login = () => {
 
  const classes = UseStyles();



   return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar component="h1" variant="h4" 
      alignItems= "center" className={classes.avatar} >
        <center> Barbería Salmeron </center>
      </Avatar>
        <Typography component="h1" variant="h4">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} >
        <Typography component="h1" variant="h5">
          Correo Electronico
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
          <Typography component="h1" variant="h5">
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
            className={classes.submit}
          >
            Registrate
          </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default Login;

