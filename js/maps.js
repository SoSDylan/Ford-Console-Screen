// // Setup maps
mapboxgl.accessToken = 'pk.eyJ1Ijoic29zZHlsYW4iLCJhIjoiY2lrcnF3M3c0MDN3M3VvbHdlNWlycTEwOSJ9.oMMmiZlZGZOrnw3gzl82kw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sosdylan/cjqvvzq5c3vjk2snticlvsil5',
    center: [145.0449, -38.245],
    zoom: 12
});

// Controls
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Traffic
map.addControl(new MapboxTraffic(), 'top-right');

// Directions
map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric'
}), 'top-left');

// map.setCenter([-74, 38]);
