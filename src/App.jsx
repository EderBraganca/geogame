import React from 'react'
import './index.css'

const App = () => {
  const fenway = { lat: 42.345573, lng: -71.098326 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: fenway,
    zoom: 14,
  });

  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: fenway,
      pov: {
        heading: 34,
        pitch: 10,
      },
    },
  );

  map.setStreetView(panorama);

  window.initialize = initialize;
  return (
    <>
      <div id="map"></div>
      <div id="pano"></div>
    </>
  )

}
export default App