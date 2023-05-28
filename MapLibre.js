// JavaScript source code
var map = new maplibregl.Map({
    container: 'map2',
    style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    center: [5.21835, 52.36645], // starting position [lng, lat]
    zoom: 5 // starting zoom

});

map.on('load', function () {
    map.addSource('my-data', {
        type: 'geojson',
        data: 'netherlands-detailed-boundary_987.geojson'
    });
});

map.addLayer({
    id: 'my-layer',
    type: 'polygon',
    source: 'my-data',
    paint: {
        'Fill-color': '#FFAA01',
        'Fill-opacity': 0.5
    }
});