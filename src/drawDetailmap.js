
var width = 400;
var height = 400;
// var dom=document.getElementById('fillgauge');
var svg = d3.select("svg")
    .append("g")
    .attr("class", "allcircle")
    .attr("width", "width")
    .attr("height", "height");

var r_x=0;
var r_y=100;
// console.log(document.getElementById("fillgauge"));
//  console.log(  parseInt(d3.select("#fillgauge").style("width"))/2);
 
var circleX = parseInt(d3.select("#fillgauge").style("width"))/2-r_x; //圆心
var circleY = parseInt(d3.select("#fillgauge").style("height"))/2-r_y;
var r_zWcircle = 130; //最外层的
var r_lWcircle = 5;
// //天
//  var hier=144;
 //年
 var hier=365/3
// var year_data_r0 = [
//     115,115,115,115,125,115,135,115,115,115,
//        115,115,115,115,115,115,115,115,115,115,
//        115,115,115,115,117,117,117,117,117,117,
//        117,117,117,120,117,117,117,117,117,117,
//        117,117,117,120,120,130,120,120,120,120,
//        125,125,125,125,125,125,125,135,125,125,
//        125,125,130,125,125,125,125,125,135,125,
//        125,125,115,115,125,115,115,115,115,115,
//        115,115,115,115,135,115,115,115,115,115,
//        120,120,120,120,120,120,120,130,120,120
//         ];
//         var year_data_r1 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 97, 100, 95, 100, 90, 100, 100, 100, 100, 100, 100,
//         100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//         100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//         100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//         100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//         100, 100, 100, 100, 100, 100, , 100, 100, 100, 100, 100, 100, 80, 100, 100, 100
//         ] //内圆数据
// var year_r1_data = [0, 0, 5, 0, 0, 0, 0, 10, 8, 3,
// 15, 5, 3, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 3, 5, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 5, 0, 0,
// 4, 9, 10, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 9, 5, 5, 15, 2, 17, 18,
// 9, 16, 19, 8, 7, 15, 13, 0, 0, 0,
// 0,0,0,0,0,0, 0, 0,5, 0, 0, 0,
// 0, 0, 0,0, 0, 9, 15,0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0,15, 3, 2, 17, 6, 0,
// 0, 0, 0, 0, 0, 0
// ]; //负荷柱形图数据
//         //天数据
//         var date_data_r0 = [
//             115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115,
//             115,
//             115, 115, 115, 115, 120, 120, 130, 120, 120, 120, 120, 120, 120, 125, 120, 120, 135, 120, 120, 120,
//             120,
//             115, 120, 120, 120, 120, 120, 120, 120, 115, 115, 115, 115, 115, 120, 120, 120, 135, 120, 120, 120,
//             120,
//             120, 120, 120, 125, 120, 120, 120, 120, 120, 120, 120, 120, 122, 122, 122, 122, 122, 122, 122, 132,
//             122,
//             132, 122, 120, 120, 120, 120, 120, 120, 115, 115, 110, 115, 115, 112, 115, 115, 115, 115, 115, 115,
//             115,
//             115, 115, 115, 115, 115
//         ] //外圆数据

//         var date_data_r1 = [100, 100, 95, 100, 100, 90, 100, 90, 100, 100, 95, 100, 100, 100, 100, 100, 100, 100,
//             100, 100,
//             100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//             100,
//             100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//             100,
//             100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//             100,
//             100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//             100,
//             100, 100, 100, 100, 100, 100, , 100, 100, 100, 100, 100, 100, 80, 100, 100, 100
//         ] //内圆数据
    
//         var date_r1_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 17, 3, 5,
//             0, 1, 7, 3, 2, 1, 0, 0, 3, 0,
//             0, 5, 1, 0, 15, 8, 8, 4, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             3, 9, 1, 0, 0, 15, 4, 7, 1, 0,
//             0, 0, 0, 0, 0, 5, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 9, 5, 15,
//             1, 2, 0, 0, 0, 5, 1, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//         ]; //负荷柱形图数据
        //夏天数据
        // var date_data_r0 = [
        //     115,115,115,115,115,115,115,115,115,115,
        //     115,120,120,125,120,120,120,120,120,120,
        //     120,120,120,120,120,120,125,125,125,125,
        //     125,125,135,125,125,125,115,115,115,115,
        //     120,120,130,120,120,120,120,120,120,120,
        //     120,125,125,125,125,125,130,130,130,130,
        //     135,130,130,130,120,120,120,120,130,130,
        //     130,130,130,125,125,135,125,125,125,115,
        //     125,125,125,135,125,125,125,125,125,125,
        //     125,125,125,125,120,120,120,120,120,120
        // ] 
        // var date_data_r1 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        //     100, 100,
        //     100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        //     100,
        //     100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        //     100,
        //     100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        //     100,
        //     100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        //     100,
        //     100, 100, 100, 100, 100, 100, , 100, 100, 100, 100, 100, 100, 100, 100, 100, 100
        // ]
        // var date_r1_data = [5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        //     0, 0, 0, 0, 0, 8, 0, 10, 0, 0,
        //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        //     0, 0, 0, 0, 0, 5, 10, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        //     10,5, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 10, 15, 17, 13, 5,
        //     4, 3, 9, 10, 20, 5, 10, 9, 3, 1,6, 7, 8,1, 5, 3, 0, 0, 0, 0,
        //     0, 7, 8, 0, 0, 0, 0, 9, 0, 0,0, 0, 0, 20, 5, 10, 10, 14, 7, 0,
        //     0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        // ]; //负荷柱形图数据



        var year_data_r0 = [
            115,115,115,120,115,115,115,115,115,115,
               115,115,115,115,118,115,115,115,115,115,
               115,115,115,115,115,
               122,122,125,122,122,
               122,122,130,122,122,122,122,135,122,122,
               122,122,122,130,122,122,122,122,125,122,
               122,
               115,115,115,115,115,115,115,115,115,
               115,115,115,115,125,115,115,115,115,115,
               115,115,115,120,115,115,
               121,121,121,121,
               121,121,121,123,121,121,125,121,121,121,
               121,135,121,121,121,121,121,121,121,121,
                ];
                var year_data_r1 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                100, 100, 100, 100, 100, 100, ,100, 100, 100, 100, 100, 100, 80, 100, 100, 100
                ] //内圆数据
    var year_r1_data = [0, 0, 3, 9, 1, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 2, 9, 3,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    9, 10, 13, 0, 0, 0, 0, 10, 12, 7,
                    0, 10, 20, 13, 7, 8, 12, 0, 0, 0,
                    0, 0, 16, 20, 13, 9, 7, 5, 0, 10,
                    12, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 9,10, 6, 4, 0,
                    0, 0, 0, 0, 0, 0, 0, 9, 8, 1,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 7, 4, 3, 10, 5, 0, 0, 0,
                    9, 8, 3, 0, 0, 0, 0, 0, 0, 0,
        ];//负荷柱形图数据
                //天数据
                var date_data_r0 = [
                    115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 117, 117, 117, 117,
                    117,
                    117, 117, 117, 117, 117, 121, 121, 121, 121, 121, 121, 121, 121, 130, 123, 123, 123, 121, 121, 121,
                    121,
                    125, 125, 125, 125, 125, 135, 120, 120, 120, 120, 120, 120, 120, 120, 115, 115, 115, 115, 115, 115,
                    120,
                    120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 130, 120, 120, 120, 120, 120, 120,
                    120,
                    120, 120, 120, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115,
                    115,
                    115, 115, 115, 115, 115
                ] //外圆数据
        
                var date_data_r1 = [93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 100, 100, 100, 100, 100, 100,
                    100, 100,
                    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                    100,
                    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                    100,
                    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                    100,
                    100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 99, 99, 99, 99, 99, 99, 99, 99
                ] //内圆数据
            
                var date_r1_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 10, 0, 0, 10, 9,
                    6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0,8, 9, 13,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 10, 9,
                    2, 8, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]; //负荷柱形图数据
          var data_r0 = [];
        var data_r1 = [];
        var r1_data = [];
         
        for (var i = 0; i < hier; i++) {
            if (hier == 144) {
                data_r0[i] = date_data_r0[i]
                data_r1[i] = date_data_r1[i]
                r1_data[i] = date_r1_data[i]
                var value=78;
            } else if (hier == 365 / 3) {
                data_r0[i] = year_data_r0[i]
                data_r1[i] = year_data_r1[i]
                r1_data[i] = year_r1_data[i]
              var value=78;
            }
        }



//最外层三个圆周
var drawArcForfuhetu = svg.append("g")
    .attr("class", "arcforfuhe");

function drawArcForfuhe(stroke_color, fill_color, startAngle_A, endAngle_A) {

    var dataArcForFuhe = {
        startAngle: Math.PI * startAngle_A,
        endAngle: Math.PI * endAngle_A
    }

    var arcForfuhe = d3.arc()
        .innerRadius(r_zWcircle)
        .outerRadius(r_zWcircle + 20);
    drawArcForfuhetu.append("path")
        .attr("d", arcForfuhe(dataArcForFuhe))
        .attr('transform', 'translate(' + circleX + ',' + circleY + ')')
        .attr("stroke", stroke_color)
        .attr("stroke-width", "0.5")
        .attr("fill", fill_color)


}
// drawArcForfuhe("#F15455", "#F6B4787F", 0, 2 / 3)
// drawArcForfuhe("#31A4D5", "#CADAE77F", 2 / 3, 4 / 3)
// drawArcForfuhe("#D25400", "#F1C40F7F", 4 / 3, 6 / 3)
// drawArcForfuhe("#31A4D5", "#CADAE77F", 0, 2 / 4)
// drawArcForfuhe("#D25400", "#F1C40F7F", 2/ 4, 4 / 4)
// drawArcForfuhe("#F15455", "#F6B4787F", 4 / 4, 6 / 4)
// drawArcForfuhe("#00FF99","#3399FF7F",6/4,8/4)

//外层层级数据，分为hier个圆柱
var bearcircle = svg.append("g")
    .attr("class", "yuanzhu");
var dataset_angle = [];
//天

//年

for (var i = 0; i <= hier; i++) {
    let obj = {};
    var angle_value2 = 2 * i / hier;
    dataset_angle.push(angle_value2 * Math.PI)
}
// console.log(dataset_angle)
//外层角度值





var wdataset = [];
for (var i = 0; i < dataset_angle.length; i++) {
    var angle = {
        startAngle: dataset_angle[i],
        endAngle: dataset_angle[i + 1],
        // r0: 180,
        // r1: r1_data[i]
    }
    wdataset.push(angle)
}
// console.log(wdataset)




//从r1获取数据来通过改变外圆半径来改变外圆高度
function cylined_zhu(r0, data, loadStroke, loadFill) {

    var arcPath_line = d3.arc()
        .innerRadius(r0)
        .outerRadius(data.r1);
    var beararcs = bearcircle
        .append("path")
        .attr("d", arcPath_line(data.obj))
        .attr('transform', 'translate(' + circleX + ',' + circleY + ')')
        .attr("class", "beararcs")
        .attr("stroke", loadStroke)
        .attr("stroke-width", "1")
        .attr("fill", loadFill)
        .attr("opacity", "1");


}
//最外层圆柱数据
var data_for_yuanzhu = [];
for (var i = 0; i < r1_data.length; i++) {
    var angle = {
        r1: r1_data[i] + r_zWcircle,

        obj: {
            startAngle: dataset_angle[i],
            endAngle: dataset_angle[i + 1]
        }

    }
    data_for_yuanzhu.push(angle)
}
// console.log(data_for_yuanzhu);
var bearcircle1 = svg.append("g")
    .attr("class", "yuanzhu1");

function cylined_zhu1(a, b, data, loadStroke, loadFill) {
    var a;
    var tooltip = d3.select("body").append("div").attr("class", "tooltip").attr("opacity", 0);
    var arcPath_line = d3.arc()
        .innerRadius(0)
        .outerRadius(200);
   
    var beararcs = bearcircle1
        .append("path")
        .attr("d", arcPath_line(data.obj))
        .attr('transform', 'translate(' + circleX + ',' + circleY + ')')
        .attr("class", "beararcs")
        .attr("stroke", loadStroke)
        .attr("stroke-width", "1")
        .attr("fill", loadFill)
        .attr("opacity", 0.000001)
        .on("mouseover", function (d) {
            d3.select(this).attr("fill", "gray").attr("stroke", "gray").attr("stroke-width", "1").attr(
                "opacity", 0.5);
            if (parseInt(a / 6) < 10) {
                var timeH = "0" + parseInt(a / 6);
            } else {
                var timeH = parseInt(a / 6);
            }
            if (a * 10 % 60 == 0) {
                var timeM = "0" + a * 10 % 60;

            } else {
                var timeM = a * 10 % 60;
            }
            if (hier==144){
                var time_data="time:"+"2018-8-15"+timeH+":"+timeM
            }
            else(
                 time_data= "time:2017-8-15/16/17"
            )
            tooltip.html("<h1>" + "Baohe 1#TS" + "</h1>" + "<p>" + time_data + 
                    "<br/>" + "overload times:" + (data.r1 - 120) + "<br/>" + "load rate:" + b + "%" + "</p>")
                

                .style("h1", "text-decoration: underline")
                .style("left", (d3.event.pageX + 30) + "px")
                .style("top", (d3.event.pageY - 10) + "px")
                .style("opacity", 1.0)
                .style('display', 'block');

        })

        .on("mouseout", function (d) {
            d3.select(this).attr("fill", "loadFill").attr("stroke", "loadStroke").attr("opacity", 0);
            tooltip.style('display', 'none');
           tooltip.style('opacity',0);
        });

}

for (var i = 0; i < hier; i++) {
    a = i;
    b = data_r0[i - 1] - 38;
    cylined_zhu1(a, b, data_for_yuanzhu[i], "gray", "gray");
    cylined_zhu(r_zWcircle, data_for_yuanzhu[i], "#CCCCFF", "#FF4500");



}



var circleload = svg.append("g")
    .attr('transform', 'translate(' + circleX + ',' + circleY + ')')
    .attr("class", "circleload");


function drawWaiCircleLoad() {
    var radialAreaGenerator = d3.radialArea()
        .curve(d3.curveCatmullRomClosed.alpha(1))
        .angle(function (d) {
            return d.angle;
        })
        .innerRadius(function (d) {
            return d.r0;
        })
        .outerRadius(function (d) {
            return d.r1;
        });
    //构造面积图




    for (i = 0; i < data_r0.length; i++) {
        data_r0[i] = data_r0[i] - 5 - r_lWcircle
    }


    //0.00-6.00
    //半径的大小用来映射负荷的大小
    var data_angel = [];
    var objs_area_red = [];
    var objs_area_green = [];
    for (var i = 0; i <= 100; i++) {
        data_angel[i] = i / 50;
    }
    for (var i = 0; i <= 100; i++) {
        let obj = {};
        var angle_value = i / 50;
        obj.angle = data_angel[i] * Math.PI;
        if (data_r0[i] > 105 - r_lWcircle) {
            obj.r0 = 100 - r_lWcircle;
            obj.r1 = data_r0[i];
            obj.color = "red";
            objs_area_red.push(obj)
        } else {
            obj.r0 = data_r0[i];
            obj.r1 = 105 - r_lWcircle;
            obj.color = "#4285F4";
            objs_area_green.push(obj)
        }
    }

    circleload
        .data(objs_area_red)
        .append("path")
        .attr("class", "fuhetu")
        .attr("d", radialAreaGenerator(objs_area_red))
        .attr("stroke", "#F15455")
        .attr("stroke-width", "2")
        .attr("fill", "#F6B478"); //画外层fuhetu
    // circleload
    //     .data(objs_area_green)
    //     .append("path")
    //     .attr("class", "fuhetu")
    //     .attr("d", radialAreaGenerator(objs_area_green))
    //     .attr("stroke", "#31A4D5")
    //     .attr("stroke-width", "1")
    //     .attr("fill", "#CADAE7"); //画内层fuhetu

}

function drawLeiCircleLoad() {
    var radialAreaGenerator = d3.radialArea()
        .curve(d3.curveCatmullRomClosed.alpha(1))
        .angle(function (d) {
            return d.angle;
        })
        .innerRadius(function (d) {
            return d.r0;
        })
        .outerRadius(function (d) {
            return d.r1;
        });
    //构造面积图

    for (i = 0; i < data_r1.length; i++) {
        data_r1[i] = data_r1[i] - 10 - r_lWcircle
    }


    //0.00-6.00
    //半径的大小用来映射负荷的大小
    var data_angel = [];
    var objs_area_red = [];
    var objs_area_green = [];
    for (var i = 0; i <= 100; i++) {
        data_angel[i] = i / 50;
    }
    for (var i = 0; i <= 100; i++) {
        let obj = {};
        var angle_value = i / 50;
        obj.angle = data_angel[i] * Math.PI;
        if (data_r1[i] > 90 - r_lWcircle) {
            obj.r0 = 90 - r_lWcircle;
            obj.r1 = data_r1[i];
            obj.color = "red";
            objs_area_red.push(obj)
        } else {
            obj.r0 = data_r1[i];
            obj.r1 = 101 - r_lWcircle;
            obj.color = "#4285F4FF";
            objs_area_green.push(obj)
        }
    }

    // circleload
    //     .data(objs_area_red)
    //     .append("path")
    //     .attr("class", "fuhetu")
    //     .attr("d", radialAreaGenerator(objs_area_red))
    //     .attr("stroke", "none")
    //     .attr("stroke-width", "2")
    //     .attr("fill", "#E3F7FF"); //画外层fuhetu
    circleload
        .data(objs_area_green)
        .append("path")
        .attr("class", "fuhetu")
        .attr("d", radialAreaGenerator(objs_area_green))
        .attr("stroke", "#2E5199")
        .attr("stroke-width", "1")
        .attr("fill", "#E3F7FF"); //画内层fuhetu

}

drawWaiCircleLoad();
drawLeiCircleLoad();


//绘制映射30-70负荷的圆圈





//drawArcForfuhe(105,110,"#F15455","#F6B478")
//drawArcForfuhe(100,105,"#31A4D5","#CADAE7")
//给圆添加文本文件0，6，12，18
var textpath = svg.append("g")
    .attr("class", "numBerText");

function writeText(text_value, x, y, text_size) {
    var text = textpath.append('text').text(text_value).attr('fill', 'black')
        .attr('x', x)
        .attr('y', y)
        .attr('transform', 'translate(' + circleX + ',' + circleY + ')')
        .attr('text-anchor', 'middle')
        .style('font-size', '10px')
        .attr('dy', 2)
}


// <!-- 
//         var wstandcircle = svg.append("circle")
//             .attr("cx", 300)
//             .attr("cy", 300)
//             .attr("r", r_zWcircle)//最外层圆的半径数据
//             .attr("class", "wwcircle")
//             .attr("fill", "none")
//             .attr("stroke-width", "1")
//             .attr("stroke", "black"); -->

// writeText('Jan', 0, -120, 10)
// writeText('Mar', 120, 0 , 10)
// writeText('June', 0 , 125, 10)
// writeText('Sept', -120 , 0, 10)
//水球图
function draWaterPolo(value) {
    var config = liquidFillGaugeDefaultSettings();
    config.circleColor = "#F38728"; //水球图外层圆颜色
    config.textColor = "#FFFFFF"; //水球图文字颜色
    config.waveTextColor = "#FFFFFF";
    config.waveColor = "#F38728"; //波浪的颜色
    config.circleThickness = 0.03;

    config.waveRise = false;

    config.waveAnimate = true;
    config.waveCount = 5;
    config.waveOffset = 0.25;
    config.textSize = 0.7; //文字大小
    config.minValue = 30;
    config.maxValue = 100
    config.textVertPosition = 0.42;



    config.waveHeightScaling = true;
    // config.textVertPosition = 0.8;//波形中显示百分比文本的高度。 0 =底部，1 =顶部。
    config.waveAnimateTime = 1200; //全波进入波浪的时间量（以毫秒为单位）。
    config.waveHeight = 0; //波高作为波浪半径的百分比。
    // config.waveAnimate = false;//控制波形是滚动还是静止。
    // config.waveOffset = 0.25;//最初抵消波浪的金额。 0 =没有偏移。 1 =一个全波的偏移。
    config.valueCountUp = false; //如果为true，则显示的值从0加载到加载时的最终值。 如果为false，则显示最终值。
    // config.displayPercent = false;//如果为true，则在该值之后显示％符号。
    var gauge = loadLiquidFillGauge("fillgauge", value, config, 68,r_x,r_y);

    function NewValue() {
        if (Math.random() > .5) {
            return Math.round(Math.random() * 120);
        } else {
            return (Math.random() * 120).toFixed(1);
        }
    }


}
draWaterPolo(value); //实时的负荷率
if (hier==365/3){




        
    drawArcForfuhe("#31A4D5", "#CADAE77F", 0, 2 / 4)
    drawArcForfuhe("#D25400", "#F1C40F7F", 2 / 4, 4 / 4)
    drawArcForfuhe("#F15455", "#F6B4787F", 4 / 4, 6 / 4)
    drawArcForfuhe("#00FF99", "#3399FF7F", 6 / 4, 8 / 4)
   
    writeText('Mar', 0, -120, 10)
    writeText('June', 120, 0, 10)
    writeText('Sept', 0, 125, 10)
    writeText('Dec', -120, 0, 10) 
  
    }
    else {

   drawArcForfuhe("#F15455", "#F6B4787F", 0, 2 / 3)
   drawArcForfuhe("#31A4D5", "#CADAE77F", 2 / 3, 4 / 3)
   drawArcForfuhe("#D25400", "#F1C40F7F", 4 / 3, 6 / 3)
   writeText('0', 0, -120, 10)
    writeText('8', 130 * Math.cos(2 / 3), 110 * Math.sin(2 / 3), 10)
    writeText('16', -110 * Math.sin(4 / 3), 280 * Math.cos(4 / 3), 10)
   
    }  
