// JavaScript source code
//initialize the map
var map = L.map('map').setView([52.36645, 5.21835], 12);
//Create baselayer - tiles
var backgroundMap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    {
        attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a>contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 19
    }
);
backgroundMap.addTo(map);
//Leaflet viewer
