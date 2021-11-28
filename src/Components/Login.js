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

const Login = () => {
 
  const classes = UseStyles();



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
        <Typography component="h1" variant="h4"
        sx={{fontWeight: 'bold'}}>
          Iniciar Sesión
        </Typography>
        <form className={classes.form} >
        <Grid item xs={12} sm={12}>
          <Typography component="h1" variant="h6"
            sx={{fontWeight: 'bold',mt: 2}} >
          Correo Electrónico
        </Typography>
          <TextField
            required
            fullWidth
            id="email"
            placeholder ="name@example.com"
            name="email"
          />
        </Grid> 
          <Typography component="h1" variant="h6" 
          sx={{fontWeight: 'bold', mt: 2}}>
            Contraseña
        </Typography>
          <TextField
            required
            fullWidth
            name="password"
            placeholder = "Password"
            id="password"
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
    </Container>
  );
};
export default Login;

