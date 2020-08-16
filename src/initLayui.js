layui.use(['form', 'layedit', 'laydate'], function () {
    var form = layui.form,
      layer = layui.layer;
    form.on('checkbox(map)', function (obj) {
      //当前元素
      console.log(obj);

      if (obj.elem.name == 'mapdot') {
        if (obj.elem.checked === true) {
          drawSubstations(data_baindianzhan);
          if (!heat) {
            heat = L.heatLayer(substation_points, {
              radius: 20
            });
          }

          substation_points = [];
        } else {
          scattorLayer.clearLayers();
        }
      }
      if (obj.elem.name == 'mapheat') {
        if (obj.elem.checked === true) {
          heat.addTo(map);
        } else {
          heat.remove();
        }
      }
      if (obj.elem.name == 'mapdistrict') {
        if (obj.elem.checked === true) {
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

    });


  });