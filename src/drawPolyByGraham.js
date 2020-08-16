
/**
 * 使用Graham's Scan算法计算散点的最小凸包多边形并在地图上绘制
 */
var test = [
    [
        [31.843368, 117.296133], "合肥工业大学"
    ],
    [
        [31.836295, 117.269526], "中国科技大学"
    ],
    [
        [31.857293, 117.290468], "安徽省立医院"
    ]
]

// convexHull.addPoint(x, y);

//getHull() returns the array of points that make up the convex hull.


function pointToLatlng(data) {
    let latlng = map.layerPointToLatLng(data);
    return latlng;
}

function LatlngToPoint(data) {
    let point = map.latLngToLayerPoint(data);

    return point;
}

function drawPolygon(data) {
    //Create a new instance.
    var convexHull = new ConvexHullGrahamScan();
    data.forEach(Element => {
        convexHull.addPoint(LatlngToPoint(Element).x, LatlngToPoint(Element).y);
    })
    var hullPoints = convexHull.getHull();
    hullPoints.forEach((element, index) => {
        hullPoints[index] = pointToLatlng(element);
    })
    console.log(hullPoints);
    L.polygon(hullPoints, {
        color: 'gray'
    }).addTo(map);
}
// drawPolygon(test);