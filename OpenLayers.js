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

