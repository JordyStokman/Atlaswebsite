// JavaScript source code
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZHlzdG9rbWFuIiwiYSI6ImNsaTYwNHN6ZzM2eTUzbG13anM0a3A2Z3gifQ.ARzV8Hc0TGQ7ocfSDsztYA';
var map = new mapboxgl.Map({
    container: 'mapbox', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [5.21835, 52.36645], // starting position [lng, lat]
    zoom: 11 // starting zoom
});