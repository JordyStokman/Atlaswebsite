var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var vector = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.KML()
    })
});

var wmsLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        url: 'http://localhost:8001/geoserver/Atlaswebsite/wms',
        params: {
            'LAYERS': 'Atlaswebsite:PostGIS',
            'TILED': true
        },
        serverType: 'geoserver'
    })
});

var map = new ol.Map({
    layers: [raster, vector, wmsLayer],
    target: 'map1',
    view: new ol.View({
        center: ol.proj.fromLonLat([5.21835, 52.36645]),
        zoom: 7
    })
});

// Create a pop-up overlay
var popup = new ol.Overlay({
    element: document.getElementById('popup'),
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
});
map.addOverlay(popup);

// Add click event listener to the map
map.on('click', function (event) {
    var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
    });

    if (feature) {
        var coordinate = event.coordinate;
        var properties = feature.getProperties();
        var content = '<ul>';
        for (var prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                content += '<li><strong>' + prop + ':</strong> ' + properties[prop] + '</li>';
            }
        }
        content += '</ul>';
        popup.setPosition(coordinate);
        document.getElementById('popup-content').innerHTML = content;
    } else {
        popup.setPosition(undefined);
    }
});
//Helaas kan ik er niet voor zorgen om de map een pop-up te laten verschijnen. Misschien ligt dit aan de connectie met de Geoserver en dat de code dit niet kan ophalen, maar het lukt mij helaas niet om dit op te halen.
