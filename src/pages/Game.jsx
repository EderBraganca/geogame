import streetview from 'awesome-streetview';
console.log(streetview.locations);

const Game = () => {
    let nLat = Math.floor(Math.random() * 34);
    let nLng = Math.floor(Math.random() * 34);
    let lat = streetview.locations[0][0];
    let lng = streetview.locations[0][1];

    const fenway = { lat, lng };

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
    </>
    )
}

export default Game;