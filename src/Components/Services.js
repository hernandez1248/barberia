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
import Header from '../Components/Layout/Header';


const theme = createTheme();

export default function Services() {


  return (
    <ThemeProvider theme={theme}>
        <Header/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left', m: 1, fontSize:30}}>
            Barbería Salmeron
          </Typography>
          <Card sx={{ maxWidth: 345, bgcolor: 'text.disabled', m:2 }}>
            <CardMedia
                component="img"
                height="300"
                image="https://i.pinimg.com/474x/80/d7/1f/80d71f40c614a936b54b1989a39d968a.jpg"
                alt="Corte"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Casquete Corto
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Costo: $50
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" variant="contained" sx={{alignItems: 'center'}}>
                    Más información
                </Button>
            </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, bgcolor: 'text.disabled',  m:2  }}>
            <CardMedia
                component="img"
                height="300"
                image="https://i.pinimg.com/originals/e1/4e/f2/e14ef2be15998f0fe90300c7928512af.jpg"
                alt="Corte"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Mohicano
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Costo: $60
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" variant="contained" sx={{alignItems: 'center'}}>
                    Más información
                </Button>
            </CardActions>
            </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}