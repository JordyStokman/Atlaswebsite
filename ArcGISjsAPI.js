    require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView) {

        esriConfig.apiKey = "AAPK7559b245ac5a47f8b04ffd5ff7423160nueuaMS3gGQ3u9rkReM2fERDijX7W9WaeJ6zxVV_5pIIeH0yuikDTjORDmc6jrZE";

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
        });

    const view = new MapView({
        map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
        });

      });
    