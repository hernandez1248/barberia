import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { withRouter } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import Alert from "./Alert"

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
  },
}));

const Login = (props) => {
  const auth = getAuth();
  const classes = UseStyles();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
   };

   const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    signInWithEmailAndPassword(auth, user.email, user.password)
    .then(response => {
      props.history.push('/services');
      if(user.email == "alexis@gmail.com" || user.email == "danielV@gmail.com" || user.email == "hernandez12@gmail.com"){
        props.history.push('/admin');
      }
    })
    .catch(error => {
      console.log(error);
      //alert(error.message);
      setErrorMessage(error.message);
    });
   };

   return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar component="h1" variant="h4" 
          alignItems= "center" className={classes.avatar}
          
          sx={{
            width: '106px',
            height: '106px',
            color: 'black',
            textAlign: 'center'
          }} >
            Barbería Salmeron
        </Avatar>
          <Typography component="h1" variant="h4"sx={{fontWeight: 'bold'}}>
            Iniciar Sesión
          </Typography>
          <form className={classes.form} >         
              <Typography component="h1" variant="h6" sx={{fontWeight: 'bold',mt: 2}} >
                Correo Electrónico
              </Typography>
              <TextField
                required
                fullWidth
                id="email"
                autoComplete="email"
                placeholder ="name@example.com"
                name="email"
                defaultValue={user.email}
                onChange={handleChange}
              />
            
              <Typography component="h1" variant="h6" sx={{fontWeight: 'bold', mt: 2}}>
                Contraseña
             </Typography>
              <TextField
                required
                fullWidth
                name="password"
                placeholder = "Password"
                type="password"
                id="password"
                autoComplete="current.password"
                defaultValue={user.password}
                onChange={handleChange}
              />
              <Button 
                type="button"
                onClick={handleLogin}
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
              </Button >
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signup" variant="body2" sx={{ marginTop: 2 ,display: 'flex' }}>
                    Regístrate  
                  </Link>
                </Grid>
              </Grid>
          </form>
      </div>
      {errorMessage &&
        <Alert type="error" message={errorMessage} autoclose={5000} />
      }
    </Container>
  );
};
export default withRouter(Login);