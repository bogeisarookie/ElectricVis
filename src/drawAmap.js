    //初始化地图对象，加载地图
    var district = null;

    function drawBounds(data) {
        //加载行政区划插件
        if (!district) {
            //实例化DistrictSearch
            var opts = {
                subdistrict: 0, //获取边界不需要返回下级行政区
                extensions: 'all', //返回行政区边界坐标组等具体信息
                level: 'district' //查询行政级别为 市
            };
            district = new AMap.DistrictSearch(opts);
        }
        //行政区查询
        district.setLevel("distirct")
        district.search(data.name, function (status, result) {
            var bounds = result.districtList[0].boundaries;
            // console.log(bounds);
            /** 
             * 格式：
             * {
             * O:XXXX，
             * P:XXX，
             * lng:XXX,
             * lat:XXX,
             * }
             */
            let points = [];
            for (let i = 0; i < bounds[0].length; i++) {
                points.push([bounds[0][i].lat, bounds[0][i].lng]);
            }
            // console.log(points);
            var polygon111 = L.polygon(points, {
                color: (function (element) {
                    return getColorByBaiFenBi(element.value);
                })(data),
                interactive:false,
                opacity:0.5
            }).bindPopup('<p>'+data.trueName+'<br />current load:'+data.value+'</p>');

            polygon111.on("click ",function (e) { 
                // e.preventDefault();
                
                polygon111.openPopup();
             })
            districtsLayer.addLayer(polygon111);

        });
    }
    var districts = [{
        name:'庐阳区',
        trueName:'Luyang district',
        value:80
    }, 
    // {
    //     name:'肥东县',
    //     value:65
    // }, 
    // {
    //     name:'庐江县',
    //     value:55
    // }, 
    {
        name:'瑶海区',
        trueName:'Yaohai district',
        value:60
    },
    //  {
    //     name:'长丰县',
    //     value:50
    // }, 
    {
        name:'蜀山区',
        trueName:'SHushan district',
        value:40
    }, 
    {
        name:'包河区',
        trueName:'Baohe district',
        value:80
    
    }, 
    // {
    //     name:'巢湖市',
    //     value:40
    // }
    ]

    // drawBounds();