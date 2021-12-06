import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Components/Layout/Header';
import Mapquest from '../Components/Mapquest'
import Grid from '@mui/material/Grid';

function Location() {
  const theme = createTheme();
  return (
    <div className="container-fluid">
        <ThemeProvider theme={theme}>
          <Header sx={{display: 'static'}}/>
          <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box sx={{m: 2, display: 'flex'}}>
                <Typography variant="h1" variant="h5" sx={{mt:1, p: 1, size: 20, ml: 5, width: '100%'}}>
                    Encuéntranos aquí
                </Typography>
              </Box>
              <Grid item xs={12} md={12}>
                <Mapquest 
                  sx={{flexGrow: 1}}
                  height= "70vh"
                  width= "100%"
                  tileLayer={'map'}
                  zoom={30}
                  apiKey="6dWL8tFLj5Qly2dhRTtQnLJDe1Gk5zBx"
              />
             </Grid> 
          </Container>
        </ThemeProvider>
    </div>
  );
}

export default Location;