// import streetview from 'awesome-streetview';
// import './Game.css';

// console.log(streetview.locations);

// const Game = () => {
//     let nLat = Math.floor(Math.random() * 34);
//     let nLng = Math.floor(Math.random() * 34);
//     let lat = streetview.locations[0][0];
//     let lng = streetview.locations[0][1];

//     const fenway = { lat, lng };

//     const map = new google.maps.Map(
//         document.getElementById("map"),
//         {
//             center: fenway,
//             zoom: 14,
//         }
//     );

//     const panorama = new google.maps.StreetViewPanorama(
//         document.getElementById("pano"),
//         {
//             position: fenway,
//             pov: {
//                 heading: 34,
//                 pitch: 10,
//             },
//             disableDefaultUI: true,
//             linksControl: false,
//             panControl: false,
//             scrollwheel: false,
//             addressControl: false,
//             addressControlOptions: false,
//             imageDateControl: false,
//             showRoadLabels: false,
//             // clickToGo: false,    
//         }
//     );

//     const style = document.createElement('style');
    
//     style.innerHTML = 
//         `
//             .gm-style-cc, .gmnoprint a[href^="https://www.google.com/maps/terms"],
//             .gmnoprint a[href^="https://www.google.com/maps?output=classic"] {
//                 display: none !important;
//             }
//         `;

//     document.head.appendChild(style);
//     // console.log(panorama.getPosition().lat());


//     window.initialize = initialize;
//     return (
//         <>
//         </>
//     )
// }

// export default Game;
