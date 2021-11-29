import * as React from 'react';
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


const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography component="h1" variant="h6"
                sx={{fontWeight: 'bold'}} >
                  Nombre
                </Typography>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  placeholder ="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              <Typography component="h1" variant="h6"
                sx={{fontWeight: 'bold'}} >
                  Correo Electrónico
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder = "name@example.com"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
              <Typography component="h1" variant="h6"
                sx={{fontWeight: 'bold'}} >
                  Contraseña
                </Typography>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder ="Contraseña"
                  type="password"
                  id="password"
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
      </Container>
    </ThemeProvider>
  );
}