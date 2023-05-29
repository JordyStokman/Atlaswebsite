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
        data: 'https://gist.github.com/JordyStokman/6da4f6f74f486ff61ca545260c6b0a29'
    });

    map.addLayer({
        id: 'my-layer',
        type: 'fill',
        source: 'my-data',
        paint: {
            'fill-color': '#ff0000',
            'fill-opacity': 0.5
        }
    });
});