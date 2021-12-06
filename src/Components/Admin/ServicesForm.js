import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from "react";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Input} from "@mui/material";
import {Link} from 'react-router-dom';
import { withRouter, useLocation } from 'react-router-dom';
import {ref, push, update} from 'firebase/database';
import {ref as stRef, uploadBytes, getDownloadURL} from 'firebase/storage'
import {database, storage} from '../../config/firebaseConfig';

const ServicesForm = (props) =>{
    const location = useLocation();
    const[service, setService] = useState({
        clave: '',
        nombre:'',
        description: '',
        price: '',
        image:'',
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) =>{
        setService({
            ...service,
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = (e) =>{
        if(!e.target.files[0])return;

        const file = e.target.files[0];
        setImage({
            type:file.type.split("/")[1],
            file
        });
    }

    const saveService = (item) =>{
        if(item.id){
            const data = {...item};
            delete data.id;
            update(ref(database, `/services/${item.id}`), data)
            .then(()=>{
                props.history.push("/admin");
            })
            .catch((error)=>{
                console.log(error);
            });
        }else{
            push(ref(database, "/services"), item)
            .then(()=>{
                props.history.push("/admin");
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(image){
            const imageName = `img_${Date.now()}.${image.type}`;
            const imageRef =  stRef(storage, `/services/${imageName}`);
            uploadBytes(
                stRef(storage, imageRef),
                image.file
            )
            .then(()=>{
                getDownloadURL(imageRef)
                .then((url)=>{
                    setService({
                        ...service,
                        image: url
                    });
                    saveService({...service, image:url});
                },
                (error)=>{
                    console.log(error)
                });
            })
        }else{
            saveService(service);
        }
    };

    useEffect(()=>{
        if(location?.state?.service){
            setService({...location.state.service});
        }
    }, [location]);

    return(
    <Paper sx={{p:3,}}> 
        <Grid container spacing={3}>
          <Grid item xs={7} md={11}>
              <h3 sx={{ m: 0}}>Barberia Salmeron</h3>
          </Grid>
          <Grid item xs={5} md={1}> 
              <Button variant="contained" LinkComponent={Link} to="/admin" >
              Regresar
              </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} component="form" onSubmit={handleSubmit} 
        sx={{mt: 3, justifyContent: 'center'}}
       >
           <Grid item container xs={12} md={6} spacing={2}
           >
               <Grid item xs={12}>
               <TextField
                       name = "clave"
                       required
                       fullWidth
                       label="Clave"
                       value={service.clave}
                       onChange={handleChange}
                    />
               </Grid>
               <Grid item xs={12}>
                   <TextField
                    name = "nombre"
                    required
                    fullWidth
                    label="Servicio"
                    value={service.nombre}
                    onChange={handleChange}
                    />
               </Grid>
               <Grid item xs={12}>
                   <TextField
                    name = "description"
                    required
                    fullWidth
                    label="Descripción"
                    value={service.description}
                    onChange={handleChange}
                    />
               </Grid>
               <Grid item xs={12}>
                   <TextField
                   name = "price"
                   required
                   fullWidth
                   label="Precio"
                   value={service.price}
                   onChange={handleChange}
                   />
               </Grid>
               <Grid item xs={12} md={12} sx={{width:"100%"}}>
                   <Input
                   type="file"
                   accept="image/*"
                   id="productImage"
                   name="productImage"
                   onChange={handleImage}
                   style={{width: '1px'}}
                   />
                   <label htmlFor="productImage">
                       <Button variant ="contained" component="span" style={{marginLeft: '-1'}}>
                            imagen de servicio
                       </Button>
                       {image && (<span style={{marginLeft:12}}>
                           {image.file.name}
                           </span>)}
                   </label>
               </Grid>
               {service.image && (
                   <Grid item xs={12} sx={{m:5, textAlign:'center'}}>
                       <img src={service.image}
                       style={{height: '120px', width:'auto',
                       fitObject: 'center'}}/>
                    </Grid>
               )}
               <Grid item xs={12} md={12} sx={{m: 5, textAlign:'center'}}>
               <Button 
                   type="submit"
                   variant="contained" 
                   startIcon={<SaveOutlinedIcon/>}
                   >
                       Guardar
                   </Button>
               </Grid>
           </Grid>
        </Grid> 
    </Paper>
    );
}

export default withRouter(ServicesForm);