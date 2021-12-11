import * as React from 'react';
import Card from '@mui/material/Card';
import {Link} from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';

export default function UserCard({service}) {
  return (
    <Grid item xs={12} md={4} sx={{ marginTop: 2,
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
      <CardActions sx={{justifyContent: "space-around"}}>
            <Button size="large" fullWidth variant="contained" sx={{alignItems: 'center'}} LinkComponent={Link} to={{pathname: `/reserve`, state: {service}}}>
                Realizar Cita
            </Button>
      </CardActions>
    </Grid>
  </Card>
</Grid>
  );
}