$("#heatcontrol input").bootstrapSwitch({
    onText: "heatmap",
    offText: "off",
    onColor: "success",
    offColor: "info",
    size: "Mini",
    handleWidth: 55,
    labelWidth: 1,
    // state:'true',
    onSwitchChange: function (event, state) {


        if (state == true) {
            heat.addTo(map);
        } else {
            heat.remove();
        }
    }
})

$("#scattorcontrol input").bootstrapSwitch({
    onText: "scattormap",
    offText: "off",
    onColor: "success",
    offColor: "info",
    size: "small",
    handleWidth: 65,
    labelWidth: 1,
    onSwitchChange: function (event, state) {
        if (state == true) {
            drawSubstations(data_baindianzhan);
            if (!heat) {
                heat = L.heatLayer(substation_points, {
                    radius: 20
                });
            }

            substation_points = [];
            // heatmap.addLayer(heat);
        } else {
            scattorLayer.clearLayers();

        }
    }
})
$("#districtcontrol input").bootstrapSwitch({
    onText: "districtmap",
    offText: "off",
    onColor: "success",
    offColor: "info",
    size: "small",
    handleWidth: 65,
    labelWidth: 1,
    onSwitchChange: function (event, state) {
        if (state == true) {
            districts.forEach(element => {
                drawBounds(element);
            })
            districtsLayer.addTo(map);
            // heatmap.addTo(map);
        } else {
            districtsLayer.clearLayers();
            districtsLayer.remove();

        }
    }
})
function OncheckBox(){
    console.log('出发了');
    
if($("input[name='mapdot']").attr('checked')=='checked' ){

}else{
    
}
if($("input[name='mapheat']").attr('checked')=='checked' ){
    heat.addTo(map);
}else{
    heat.remove();
}
if($("input[name='mapdistrict']").attr('checked')=='checked' ){
    districts.forEach(element => {
        drawBounds(element);
    })
    districtsLayer.addTo(map);
    // heatmap.addTo(map);
}else{
    districtsLayer.clearLayers();
    districtsLayer.remove();
}
    //取消


}
//散点图
if ($("input[name='mapdot']").attr("checked") == "checked") {
    // do somethig 
}
//热力图


laydate.render({
    elem: '#datetime', //指定元素
    format: 'yyyy-MM-dd HH:mm', //可任意组合
    value: '2018-11-15 08:00',
    lang: 'en'
});