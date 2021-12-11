import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { onValue, ref, remove } from 'firebase/database';
import {database} from '.././Config/firebaseConfig';
import LogoutIcon from '@mui/icons-material/Logout';
import ServicesCard from './ServicesCard'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Works = () =>{
    const [services, setServices]=useState([]);

    const handleDelete = (id) =>{
        console.log(id);
        remove(ref(database, `/services/${id}`))
        .then(()=>{
            alert("Servicio Eliminado");
        })
    }

    const renderServices = () =>{
        return services.map((item)=>(
            <ServicesCard key={item.id} service={item} onDelete={handleDelete}/>
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

    return(
        <ThemeProvider theme={theme}>
            <Paper
                sx={{
                    p:3,


                }}
            >
                <Grid container spacing={3} sx={{ justifyContent: "space-around", display:'flex'}}>
                    <Grid item xs={3} md={8}>
                        <h3 sx={{ m: 0, position: 'left'}}>Mis Servicios</h3>
                    </Grid>
                    <Grid item xs={5} md={2}> 
                        <Button variant="contained" LinkComponent={Link} to="/admin/agregar" startIcon={<AddOutlinedIcon />}>
                        Agregar
                        </Button>
                    </Grid>
                    <Grid item xs={4} md={2}> 
                        <Button variant="contained" LinkComponent={Link} to="/" startIcon={<LogoutIcon/>}>
                        Salir
                        </Button>
                    </Grid>
                    </Grid>
                    <Grid container spacing={3} xs={12} sx={{ display: 'flex' }}>
                        {renderServices()}
                    </Grid>
            </Paper>
        </ThemeProvider>
            }}
        >
    );
}

export default Works;