import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {Link } from "react-router-dom";
import Header from '../Components/Layout/Header';


const theme = createTheme();

export default function Services() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box  sx={{display: 'flex', justifyContent: "space-around", m:1, background:"white"}}>
        <Grid item xs={6} md={7}>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', fontSize:30}}>
            Barbería Salmeron
          </Typography>
        </Grid>
        <Grid item xs={6} md={5}>
        <Button component={Link} to="/login" size="large"  variant="contained" sx={{fontWeight: 'bold', mt: 2, width:"80%"}}>
          Iniciar Sesión
        </Button> 
        </Grid>
      </Box>
      <Container component="main">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card component={Grid} container sx={{bgcolor: 'silver', border: 'solid', mt: 2}}>
                <Grid item xs={5}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://i.pinimg.com/474x/80/d7/1f/80d71f40c614a936b54b1989a39d968a.jpg"
                    alt="Corte"
                />
                </Grid>
                <Grid item xs={7}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Casquete Corto
                    </Typography>
                    <Typography variant="body2" variant="h6" component="div" color="text.primary">
                        Costo: $50
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" fullWidth variant="contained" sx={{alignItems: 'center'}}>
                        Más información
                    </Button>
                </CardActions>
                </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card component={Grid} container sx={{bgcolor: 'silver', border: 'solid', mt: 2}}>
              <Grid item xs={5}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://i.pinimg.com/originals/e1/4e/f2/e14ef2be15998f0fe90300c7928512af.jpg"
                    alt="Corte"
                />
              </Grid>
              <Grid item xs={7}>
                <CardContent component={Grid} item>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                      Mohicano
                  </Typography>
                  <Typography variant="body2" variant="h6" component="div" color="text.primary">
                      Costo: $60
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" fullWidth variant="contained" sx={{alignItems: 'center'}}>
                    Más información
                  </Button>
                </CardActions>
              </Grid> 
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
          <Card component={Grid} container sx={{bgcolor: 'silver', border: 'solid', mt: 2}}>
            <Grid item xs={5}>
              <CardMedia
                  component="img"
                  height="200"
                  image="https://i.pinimg.com/originals/70/c4/19/70c419348d29d4d11f5fbdfb1c411ac7.jpg"
                  alt="Corte"
              />
            </Grid>
            <Grid item xs={7}>
              <CardContent component={Grid} item>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Desvanecido
                </Typography>
                <Typography variant="body2" variant="h6" component="div" color="text.primary">
                    Costo: $80
                </Typography>
              </CardContent>
              <CardActions>
                    <Button size="large" fullWidth variant="contained" sx={{alignItems: 'center'}}>
                        Más información
                    </Button>
              </CardActions>
            </Grid> 
          </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}