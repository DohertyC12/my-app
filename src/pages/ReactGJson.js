import ReactGeoJSON from 'react-geojson';
import wdcDistricts from "../annotatedData.geojson";

//https://github.com/mjanssen/react-geojson#readme

export function RGJson() {

    return (
        //const localStorage = wdcDistricts;  

        //AIzaSyDm2ES5BoKQwtHMr1cMvqpp3OgomGNCh54
        < ReactGeoJSON
            apiKey="..."
            onMapInitiated={(map) => console.log('Map initiated', map)
            }
            onPolygonsDrawn={(polygons) => console.log('Available polygons', polygons)}
            scriptLibraries="geometry"
            existingArea={JSON.parse(localStorage.getItem('geojson'))}
            onSave={(data) => localStorage.setItem('geojson', JSON.stringify(data))}
            //mapStyles={mapStyles}
            //areaStyles={areaStyles}
            zoom={12}
            center={{ lat: 51.9246562, lng: 4.4763706 }}
        />
    )
}