import React, {useEffect} from 'react'; 

const Mapquest = ({height, width, tileLayer, zoom, apiKey})=>{
   useEffect(() => {
       //apiKey
       window.L.mapquest.key = apiKey;

       //iniciar el mapa
       const map = window.L.mapquest.map('map', {
           center: [18.5818373, -98.5584369],
           layers: window.L.mapquest. tileLayer(tileLayer),
           zoom
       }); 

       map.addControl(window.L.mapquest.control());

       window.L.marker([18.5818373, -98.5584369], {
            icon: window.L.mapquest.icons.marker(),
            draggable: false
        }).bindPopup('Barbería').addTo(map);
   }, []);
        

    return (
        <div id="map" style={{width, height}} sx={{ p:1 }}>
           <p>Cargando Mapa...</p> 
        </div>
    );
};

export default Mapquest;