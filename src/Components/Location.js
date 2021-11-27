import React, {useState} from 'react';
import Mapquest from '../Components/Mapquest'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Components/Layout/Header';




function Location() {
  //component state
  const [lat, setLat] = useState('19.033333');
  const [lng, setLng] = useState('-98.183334')
  const [markers, setMarkers]=useState([]);
  
  
  //fijar el centro del mapa
  const setCenter = (lat, lng) =>{
    setLat(lat);
    setLng(lng);
    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat, lng), 12)
  };
  
  const addMarker = (lat, lng, title, subtitle)=>{
    const marker = window.L.mapquest.textMarker(
      new window.L.latLng(lat, lng),
      {
        text: title || '',
        subtext: subtitle || '',
        position: 'right',
        type: "marker",
        icon:{
          primaryColor: '#a8190f',
          secondaryColor: '#db2c2c',
          size: 'md'
        }
      }
    ) 
    .addTo(window.L.mapquest.Map.getMap('map'));

    const copyMarkers = markers.slice(0);
    copyMarkers.splice(0, 0, marker);//push(marker);
    setMarkers(copyMarkers);
  };
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
          <Mapquest 
            sx={{display: 'static', flexGrow: 1, width: '100%'}}
            height= "70vh"
            width= "100%"
            center={{lat, lng}}
            tileLayer={'map'}
            zoom={12}
            apiKey="6dWL8tFLj5Qly2dhRTtQnLJDe1Gk5zBx"
        />
        
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default Location;