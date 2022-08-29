import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Advert } from "./apollo-components";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import L from "leaflet";

const Map = ({ ads }: { ads: Advert[] }) => {
const icon = L.icon({
  iconUrl:
    "/images/location-marker-location-pin-location-pointer-map-locator-map-pin-svgrepo-com.svg",
});

return (
  <MapContainer
    center={{ lat: ads[0]?.location?.lat, lng: ads[0]?.location?.lng }}
    zoom={13}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {ads?.map((item, index) => (
      <Marker
        // icon={icon}
        key={index}
        position={{
          lat: item?.location?.lat,
          lng: item?.location?.lng,
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
