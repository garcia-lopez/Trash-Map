var map = L.map('map').setView([12.1403649,-86.2234044042226], 17);
// Initialize the map with the default layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Define the polygon coordinates
var polygon = L.polygon([
    [12.1423, -86.2244], // Northwest corner
    [12.1425, -86.2241], // Northwest corner
    [12.1425, -86.2241], // Northwest corner
    [12.1422, -86.2230],
    [12.1417, -86.2210], // Northeast corner (moved further right)
    [12.1384, -86.2210], // Southeast corner (moved further right)
    [12.1384, -86.2275]  // Southwest corner 
], {
    color: '#C4742C',       // Border color
    fillColor: 'lightblue', // Fill color
    fillOpacity: 0.5     // Transparency
}).addTo(map);

//Adding Mini map
// Tile layer for the MiniMap
let miniMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 6,
    maxZoom: 13,
    attribution: '&copy; OpenStreetMap contributors'
});



// MiniMap control
let miniMap = new L.Control.MiniMap(miniMapLayer, {
    toggleDisplay: true,
    minimized: false,
    position: 'bottomright',
    
}).addTo(map);


//Adding markers to show where the trash is located
var trashIcon = L.icon({
    iconUrl: './assets/Camera-trash-icon.png',
    iconSize: [35, 50],
});

var trashCanIcon = L.icon({
    iconUrl: './assets/Trash-can-with-Pic.png',
    iconSize: [35, 50],
});


const markersWithPics = [ 
    {
        coords: [12.1385, -86.2220],
        pic: './assets/trashPics/pic-of-the-corner.jpeg',
        icon: trashIcon
    },
    {
        coords: [12.1416, -86.2233],
        pic: './assets/trashPics/pic-last-one-on-top.jpeg',
        icon: trashIcon
    }
    ,
    {
        coords: [12.1408, -86.2240],
        pic: './assets/trashPics/pic-in-the-middle-area.jpeg',
        icon: trashIcon,
    }
    ,
    {
        coords:  [12.1390, -86.2230],
        pic: './assets/trashPics/pic1.jpeg',
        icon: trashIcon,
    }
    //Coordenadas del area del parque
    ,
    {
        coords: [12.1408, -86.2216],
        pic: './assets/trashPics/pic-of-the-corner.jpeg',
        icon: trashCanIcon 
    },
    {
        coords: [12.1391, -86.2216],
        pic: './assets/trashPics/pic-of-the-corner.jpeg',
        icon: trashCanIcon 
    },
    {
        coords: [12.1398, -86.2216],
        pic: './assets/trashPics/pic-of-the-corner.jpeg',
        icon: trashCanIcon 
    },
    
    
]



for (const i in markersWithPics) { //`String text ${expression}` is called a template literal
    L.marker(markersWithPics[i].coords, {icon: markersWithPics[i].icon}).addTo(map).bindPopup(`<img src=${markersWithPics[i].pic} width="100" height="100">`);
}

//var myIcon = L.icon({
//    iconUrl: 'assets/bote-de-basura.png',
//    iconSize: [32, 32],
//});

//L.marker([12.1389, -86.2250], {icon: myIcon}).addTo(map);