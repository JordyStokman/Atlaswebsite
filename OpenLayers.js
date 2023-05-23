// JavaScript source code
var mapView = new ol.View({
    center: ol.proj.fromlonlat([52.36645, 5.21835]),
    zoom: 12,
});

var map = new ol.Map({
    target: 'map1',
    view: mapView,
});

var osmTile = new ol.layer.Tile({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
});

map.addLayer(osmTile);