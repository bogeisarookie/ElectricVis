var mockdata = mockData();
console.log(mockdata);
function drawMarker() {
    scatter_points = [];
    mockdata.forEach(element => {
        scatter_points.push([element.lat, element.lng, element.level * 6]);
        let circle = L.circle([element.lat, element.lng], {
            // icon: L.AwesomeMarkers.icon({
            //     icon: 'gb-white',
            //     prefix: 'icon',
            //     markerColor: (function (element) { 
            //         if(element.level==1){
            //             return "green";
            //         }
            //         if(element.level==2){
            //             return "orange";
            //         }
            //         if(element.level==3){
            //             return "red";
            //         }
            //      })(element),
            //     iconColor: "white"
            // })
            radius: 30,
            fillOpacity: 1,
            color: (function (element) {
                if (element.level == 1) {
                    return "green";
                }
                if (element.level == 2) {
                    return "orange";
                }
                if (element.level == 3) {
                    return "red";
                }
            })(element)
        });
        markersLayer.addLayer(circle);

    });

    // markersLayer.addLayer(marker);
    markersLayer.addTo(map);

}
//绘制变电站
var substation_points=[];
function drawSubstations(data) {
    //遍历每个区域
    data.forEach(area => {
        area.children.forEach(point => {
            substation_points.push([point.coor[0], point.coor[1], point.value-10])
           let circle= L.circle(point.coor, {
                radius: 60,
                fillOpacity: 1,
                color: (function (value) {
                    if (value > 20&&value<80) {
                        return 'rgb(255,255,0)';
                    }
                    if(value<=20){
                        return 'rgb(0,255,0)';
                    }
                    if(value>=80){
                        return 'rgb(255,0,0)';
                    }
                })(point.value),
                className:point.coor[0].toString(),
            });
            circle.on('click',function(e){
                console.log(e);
                
            })
            scattorLayer.addLayer(circle);
        })
    });
    scattorLayer.addTo(map);
}
// drawSubstations(data_baindianzhan)
// 绘制一个写死的数据，包河万达变电站
var baoheMarker = L.marker([31.8571109687, 117.3032569885], {
    icon: L.AwesomeMarkers.icon({
        icon: 'gb-white',
        prefix: 'icon',
        markerColor: 'red',
        iconColor: 'white'
    })
});
var baoheCircle=L.circle([31.8571109687, 117.3032569885],{

        radius: 60,
        fillOpacity: 1,
        color: 'red',


}).addTo(map);
baoheCircle.on('click',function(){
    console.log('dianjile');
    
    baoheMarker.addTo(map);
})
let markerPopup = baoheMarker.bindPopup(
    "<div class='userpopup'><span class='label label-primary'>Name</span> Baohe 1# ST </div>" +
    "<div class='userpopup'><span class='label label-primary'>Voltage</span> 10kV</div>" +
    "<div class='userpopup'><span class='label label-primary'>Capcity</span>3200kVA</div>"
).openPopup();
baoheMarker.on('click', function (e) {
    map.setView(e.latlng);
    markerPopup.openPopup();
    drawPolygon(arrs);
    drawLine();

})