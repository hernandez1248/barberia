import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

export default function WithoutUserCard({service}) {
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
          height="200"
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
  );
}