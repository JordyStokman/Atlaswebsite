// JavaScript source code
var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var vector = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.KML()
    })
});

var map = new ol.Map({
    layers: [raster, vector],
    target: document.getElementById('map1'),
    view: new ol.View({
        center: ol.proj.fromLonLat([5.21835, 52.36645]),
        zoom: 12
    })
});

