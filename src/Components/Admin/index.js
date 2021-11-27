import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';



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
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
          </Box>
        </main>
      </ThemeProvider>
    );
}

export default Works;