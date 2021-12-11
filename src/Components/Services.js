import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import UserCard from '../Components/UserCard'
import Header from '../Components/Layout/Header';
import { onValue, ref } from 'firebase/database';
import {database} from './Config/firebaseConfig';

const theme = createTheme();

export default function Services() {
  const [services, setServices]=useState([]);
  const renderServices = () =>{
    return services.map((item)=>(
        <UserCard key={item.id} service={item}/>
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
        <Header/>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            textAlign: 'center',
          }}
          >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', fontSize:30}}>
            Barbería Salmeron
          </Typography>
          
          <Grid container spacing={3} xs={12} sx={{ display: 'flex' }}>
              {renderServices()}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}