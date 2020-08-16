//绘制变电站详细视图
var detail_line_Chart = echarts.init(document.querySelector('#detailmap-line'));
var detail_line_option = {
  xAxis: {
      type: 'category',
      boundaryGap: false,
    //   data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
      data:['Jan','','Feb','','Mar','','Apr','','May','','Jun','','Jul','','Aug','','Sep','','Oct','','Nov','','Dec','']
  },
  yAxis: {
      type: 'value',
      name :'load rate(%)'
  },
  series: [{
      //系统天
    //   data: [20, 19, 18, 19, 22, 45, 33,38,50,48,52,53,55,54,67,69,70,65,60,59,57,59,50,40],
      //案例天
    //   data:[5,7,7,10,15,30,40,55,60,70,75,50,20,35,37,40,55,65,55,60,65,50,35,25],
      //师弟天
    //   data:[20, 19, 18, 19, 22, 45, 33,38,50,48,52,53,55,54,67,69,70,65,60,59,57,59,50,40],
    //师弟年
    data:[73,70,79,65,53,46,39,43,49,48,70,71,79,81,83,90,76,68,53,54,50,47,68,60],

    //案例年
    // data:[50,40,20,19,30,40,70,80,85,40,32,62],
      type: 'line',
      showSymbol: false,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#F38728' // 0% 处的颜色
          }, {
              offset: 1, color: '#E3F7FF' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      }
      },
      lineStyle:{
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#F38728' // 0% 处的颜色
          }, {
              offset: 1, color: '#E3F7FF' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      }
      }
  }]
};
detail_line_Chart.setOption(detail_line_option);