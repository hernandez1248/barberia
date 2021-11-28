import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';


const theme = createTheme();

const Works = () =>{
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{position: 'relative', border: 1, m:2, p:1}}>
        <Typography
                component="h1"
                variant="h5"
                align="center"
                color="text.primary"
              >
                Agregar servicio
              </Typography>
              
        </Box>
            <Button variant="contained" LinkComponent={Link} to="/services/agregar" startIcon={<AddOutlinedIcon />} 
            sx={{mx:10, width:"50%", minWidth: "25%"}}>
                Agregar
            </Button>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              textAlign: 'center',
              m: 1
            }}
          >
            <Card component={Grid} container sx={{bgcolor: 'text.disabled', border: 'solid', mt: 2}}>
            <Grid item xs={5}>
              <CardMedia
                  component="img"
                  height="220"
                  image="https://i.pinimg.com/474x/80/d7/1f/80d71f40c614a936b54b1989a39d968a.jpg"
                  alt="Corte"
              />
            </Grid>
            <Grid item xs={7}>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold', }}>
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

          <Card component={Grid} container sx={{bgcolor: 'text.disabled', border: 'solid', mt: 2}}>
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
          </Box>
        </main>
      </ThemeProvider>
    );
}

export default Works;