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
import Header from './Layout/Header';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { CardActionArea } from '@mui/material';
import PaypalCheckoutButton from './PaypalCheackoutButton'

const theme = createTheme();

export default function Reservation() {
    const order = {
        customer: '112122',
        total: '3908.97',
        items: [
            {
                sku:'112', 
                name: 'Bocina Tronsmart T6',
                price: '1,139.99',
                quantity: 1,
                currency: 'MXN'
            },
            {
                sku:'199', 
                name: 'Xiaomi Mi Band 4',
                price: '929.99',
                quantity: 2,
                currency: 'MXN'
            },
            {
              sku:'305', 
              name: 'Mouse Logitech G502 Hero',
              price: '909.00',
              quantity: 1,
              currency: 'MXN'
          }
        ]
    }


  return (
    <ThemeProvider theme={theme}>
        <Header/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Card sx={{ maxWidth: 400, textAlign: 'center' }}>
      <CardActionArea>
        <CardContent>
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', m: 1, fontSize:30}}>
            Reservación
          </Typography>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color= "blue" sx= {{textAlign: 'center'}}>
                Fecha:
                </Typography>
                <Typography variant="body2" color="text.primary" sx= {{textAlign: 'center'}}>
                    19 - 12 - 21
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color= "blue" sx= {{textAlign: 'center'}}>
                Hora:
                </Typography>
                <Typography variant="body2" color="text.primary" sx= {{textAlign: 'center'}}>
                    10:30
                </Typography>
                <Typography gutterBottom variant="h5" color= "blue" component="div" sx= {{textAlign: 'center'}}>
                Servicio:
                </Typography>
                <Typography variant="body2" color="text.primary" sx= {{textAlign: 'center'}}>
                    Casquete Corto
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color= "blue" sx= {{textAlign: 'center'}}>
                Total a pagar:
                </Typography>
                <Typography variant="body2" color="text.primary" sx= {{textAlign: 'center'}}>
                    $200
                </Typography>
            </CardContent>
        </CardContent>
      </CardActionArea>
    </Card>
    <Typography gutterBottom variant="h5" component="div" color= "blue" sx= {{textAlign: 'center'}}>
                ¿Desea pagar ahora mismo?
                </Typography>
                <PaypalCheckoutButton order={order}/>
                <Grid container justifyContent="flex-end" sx= {{textAlign: 'center'}}>
              <Grid item sx= {{textAlign: 'center'}}>
                <Link href="#" variant="body2">
                  Prefiero hacerlo después
                </Link>
              </Grid>
            </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}