import './index.css'

const App = () => {
  const fenway = { lat: -20.385582, lng: -43.508666 };

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
      <button onClick={initialize} className='button'>Carregar Mapa</button>
    </>
  )

}
export default App
