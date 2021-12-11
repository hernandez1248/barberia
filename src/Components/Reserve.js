import React,{useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Components/Layout/Header';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

import {  useLocation } from 'react-router-dom';


const theme = createTheme();

export default function Reserver() {
  const location = useLocation();

    const[service, setService] = useState([]);

    useEffect(()=>{
        if(location?.state?.service){
            setService({...location.state.service});
        }
    }, [location]);
    
    const  [ value ,  setValue ]  =  React.useState ( ) ;

    const  handleChange  =  ( newValue )  =>  {
      setValue ( newValue ) ;
    } ;
  
  return (
    <ThemeProvider theme={theme}>
        <Header/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Grid item xs={12} md={12} sx={{ marginTop: 10,
                flexDirection: 'column',
                alignItems: 'left',
                textAlign: 'center',
                mb: 1,
                }}>
              <Card component={Grid} container sx={{bgcolor: '#D5DBDB', boxShadow: 3}}>
              <Grid item xs={5}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={service.image}
                    alt={service.nombre}
                />
              </Grid>
              <Grid item xs={7}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold' }}>
                    {service.nombre}
                    </Typography>
                    <Typography variant="body2" variant="h6" component="div" color="text.primary">
                        Costo: ${service.price}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom  component="div" color="text.primary" sx={{size: '12px'}}>
                        {service.description}
                    </Typography>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              textAlign: 'center',
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack>
                <Typography sx={{fontWeight: 'bold', mt: 2}}>
                  Selecciona tu fecha de reserva
                </Typography>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Typography sx={{fontWeight: 'bold', mt: 2}}>
                  Hora de reserva
                </Typography>
                <TimePicker
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <CardActions>
              <Button component={Link} to="/reservation" size="large" fullWidth variant="contained" sx={{fontWeight: 'bold', mt: 2}}>
                Reservar
              </Button>
            </CardActions>
        </Box>
      </Container>
    </ThemeProvider>
  );
}