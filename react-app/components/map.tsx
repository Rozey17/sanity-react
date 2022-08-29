import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Advert } from "./apollo-components";

const Map = ({ ads }: { ads: Advert[] }) => {
  return (
    <MapContainer center={[63, 89]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {ads?.map((item, index) => (
        <Marker
          // icon={}
          key={index}
          position={{
            lat: item?.location.lat,
            lng: item?.location.lng,
          }}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
