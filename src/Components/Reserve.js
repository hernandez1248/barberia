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
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';


const theme = createTheme();

export default function Reserver() {

  const [value, setValue] = React.useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
        <Header/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            textAlign: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', m: 1, fontSize:30}}>
            Reservar ahora
          </Typography>

          <Card component={Grid} container sx={{bgcolor: 'text.disabled', border: 'solid'}}>
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
              <Button size="large" fullWidth variant="contained" sx={{fontWeight: 'bold', mt: 2}}>
                Reservar
              </Button>
            </CardActions>
        </Box>
      </Container>
    </ThemeProvider>
  );
}