import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -77.014695,
      lng: 38.905379
    },
    zoom: 11
  };



  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '80%', alignContent: 'right'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-77.014695}
          lng={38.905379}
          text="My Marker WADC"
        />
      </GoogleMapReact>
    </div>
  );
}