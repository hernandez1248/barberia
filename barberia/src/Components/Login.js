
import { makeStyles } from '@mui/material/styles';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const Login = () => {
 




   return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
     
      <div ></div>
        <Typography component="h1" variant="h4">
          Iniciar Sesión
        </Typography>
        <form >
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
            
          >
            Registrate
          </Button>
          </Grid>
        </form>
    </Container>
  );
};
export default Login;