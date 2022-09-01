import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet-draw/dist/leaflet.draw.css";
import { Advert } from "./apollo-components";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import L from "leaflet";

const Map = ({ ads }: { ads: Advert[] }) => {
  const icon = L.icon({
    iconUrl: "/images/icons8-marker-48.png",
    iconSize: [30, 30],
  });

  // const getPosition = (options) => {
  //   if (navigator.geolocation) {
  //     return new Promise((resolve, reject) => {
  //       navigator.geolocation.getCurrentPosition(resolve, reject, options);
  //     });
  //   }
  // };

  // const myLocation = async () => ({
  //     location: await getPosition().then(({ coords }) => {
  //       const { longitude, latitude, altitude } = coords;
  //       return {
  //         _type: "geopoint",
  //         lat: latitude,
  //         lng: longitude,
  //         alt: altitude,
  //       };
  //     }),
  //   })

  return (
    <MapContainer
      center={{ lat: ads[0]?.location?.lat, lng: ads[0]?.location?.lng }}
      // bounds={ads.map((item, index) => [
      //   item?.location?.alt,
      //   item?.location?.lng,
      // ])}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {ads?.map((item, index) => (
        <Marker
          icon={icon}
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
