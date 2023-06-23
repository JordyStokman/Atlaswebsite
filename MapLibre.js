var map = new maplibregl.Map({
    container: 'map2',
    style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    center: [13.556099267061962, 50.423182389830394], // starting position [lng, lat]
    zoom: 3 // starting zoom
});

var popup = new maplibregl.Popup({
    closeButton: false, 
    closeOnClick: false 
});

// Adds a marker to the map
var marker = new maplibregl.Marker()
    .setLngLat([5.21835, 52.36645])
    .addTo(map);
    