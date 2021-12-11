import React,{useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import WithoutUserCard from './WithoutUserCard';
import {Link } from "react-router-dom";
import { onValue, ref } from 'firebase/database';
import {database} from './Config/firebaseConfig';

const theme = createTheme();

export default function Services() {
  const [services, setServices]=useState([]);
  const renderServices = () =>{
    return services.map((item)=>(
        <WithoutUserCard key={item.id} service={item}/>
    ))
};

useEffect(()=>{
  let isMounted = true;
  onValue(
      ref(database, "services/"),
      (snapshot)=>{
          const servicesList=[];

          snapshot.forEach(item =>{
              const serviceItem = {
                  id: item.key,
                  ...item.val()
              };
              servicesList.push(serviceItem);
          });
          setServices(servicesList);
      }, 
      (error) =>{
          console.log(error);
      }
  );
  return()=>{
      isMounted = false;
  };
}, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{display: 'flex', justifyContent: "space-around", m:1, background:"white"}}>
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
        <Grid container spacing={3} xs={12} sx={{ display: 'flex' }}>
              {renderServices()}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}