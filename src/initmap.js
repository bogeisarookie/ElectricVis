
var normalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
}),
satelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
    maxZoom: 18,
    minZoom: 5
});
var gray = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
    maxZoom: 18,
    minZoom: 5
});
var PurplishBlue = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
    maxZoom: 18,
    minZoom: 5
});
var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var OpenMapSurfer_Roads = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var scatter_points=[];
var markersLayer=new L.layerGroup();
//绘制散点图
var scattorLayer=new L.layerGroup();
//绘制区域图
var districtsLayer=new L.layerGroup();
//绘制热力图
var heat;
// var heatmap=new L.layerGroup();
var baseLayers = {
"地图": normalMap,
"影像": satelliteMap,
"灰色": gray,
// "热图": heatmap,
"osm":OpenStreetMap_Mapnik,
}

var overlayLayers = {

}

var map = L.map("map", {
center: [31.863125167416378, 117.2867774963379],
zoom: 12,
layers: [gray],
zoomControl: false
});

L.control.layers(baseLayers, overlayLayers).addTo(map);
L.control.zoom({
zoomInTitle: '放大',
zoomOutTitle: '缩小'
}).addTo(map);
map.on('click',function (e) { 
    console.log(e.latlng);
 })


 function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}
 //添加颜色指示器、
 var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 10, 20, 50, 100, 200, 500, 1000],
			labels = [
                "<span style='margin-bottom:10px'>Loading rote</span>" ,
                "<i style='background:rgb(0,255,0)'></i>0-30%" ,
                "<i style='background:rgb(255,255,0)'></i>30%-80%" ,
                "<i style='background:rgb(255,0,0)'></i>80%-100%" 
            ];

		// for (var i = 0; i < grades.length; i++) {
		// 	from = grades[i];
		// 	to = grades[i + 1];

		// 	labels.push(
		// 		'<i style="background:' + getColor(from + 1) + '"></i> ' +
		// 		from + (to ? '&ndash;' + to : '+'));
		// }

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);
