/** 
 * 绘制比较视图，提供当前年份和往年负荷的对比视图。
 */
var comChart = echarts.init(document.querySelector('.detailmap-compare>.map'));
// var com_option = {
//     title: {
//         text: 'Equipment load',
//         textStyle:{
//             fontSize:16,
//             fontWeight:'normal'
//         }
//     },
//     tooltip: {
//         trigger: 'axis'
//     },
//     legend: {
//         data:['2017','2016']
//     },
//     grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//     },
//     toolbox: {
//         feature: {
//             // saveAsImage: {}
//         }
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
//     },
//     yAxis: {
//         name:'load(kVA)',
//         type: 'value',
//         splitLine: {
//             show: false
//         }
//     },
//     series: [
//         {
//             name:'2017',
//             type:'line',
//             // stack: 'null',
//             showSymbol: false,
//             data:[50, 53, 52, 55, 54, 55, 73,75,85,70,63,52]
//         },
//         {
//             name:'2016',
//             type:'line',
//             // stack: 'null',
//             showSymbol: false,
//             data:[50, 52, 50, 54, 51, 56, 65,66,73,69,62,52]
//         },
//     ]
// };











//'#675bba'
var colors = ['#d14a61','#5793f3',  ];

var com_option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '10%'
    },
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    legend: {
        data: ['2017-08 olt', '2017-12 olt', '2017-08 dl', '2017-12 dl']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        // data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        // data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
        data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28,','29','30','31'],
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
            type: 'value',
            name: 'overload times',
            min: 0,
            max: 20,
            position: 'right',
            axisLine: {
                lineStyle: {
                    // color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: {
                show: false
            }
        },
        // {
        //     type: 'value',
        //     name: '降水量',
        //     min: 0,
        //     max: 250,
        //     position: 'right',
        //     offset: 80,
        //     axisLine: {
        //         lineStyle: {
        //             color: colors[1]
        //         }
        //     },
        //     axisLabel: {
        //         formatter: '{value} ml'
        //     }
        // },
        {
            type: 'value',
            name: 'device load',
            min: 0,
            max: 200,
            position: 'left',
            axisLine: {
                lineStyle: {
                    // color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value}KW'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: '2017-08 olt',
            type: 'bar',
            yAxisIndex: 0,
            //年
            data:[5,3, 6, 5, 5, 3, 2, 5, 4, 6,
                5,7, 3, 2, 6, 3, 5, 6, 5, 3,
                4,3, 4, 5, 6, 5, 3, 5, 2, 3]
            // data:[0,0,0,0,0,0,0,1,2,3,5,7,5,5,4,6,5,4,3,2,3,1,0,0]
            //月
            // data:[3,7, 6, 6, 5, 7, 6, 5, 4, 3,
            //     4,5, 7, 2, 6, 3, 1, 2, 5, 7,
            //     2,1, 2, 3, 1, 5, 4, 3, 2, 1]
        },
        {
            name: '2017-12 olt',
            type: 'bar',
            yAxisIndex: 0,
            //年
            data:[4, 5, 6, 3, 2, 2, 2, 4, 3, 5,
                3, 4,1, 1, 4, 2, 5, 3, 2, 6,
                1, 1, 4, 3, 5, 3, 3, 2, 1, 2]
            // data:[0,0,0,0,0,0,0,2,2,4,5,8,5,7,4,8,5,7,5,3,5,2,2,0]
            //月
            // data:[1, 2, 1, 2, 1, 2, 1, 1, 0, 6,
            //     3, 0, 3, 1, 2, 4, 5, 2, 1, 7,
            //     1, 3, 2, 5, 4, 3, 2, 1, 1, 5]
        },
        {
            name: '2017-08 dl',
            type: 'line',
            yAxisIndex: 1,
            //年
            // data:[160,170,174,170,160,176,190,240,280,260,180,140]
           
          
            // data:[40,50,50,45,50,60,65,68,70,75,76,76,75,76,73,70,65,60,62,65,70,62,50,30]
            //月
            data:[85,87,80,85,85,89,95,100,90,80,90,120,100,90,90,93,95,89,86,84,87,98,96,98,97,89,86,95,99,110]
        },
        {
            name: '2017-12 dl',
            type: 'line',
            yAxisIndex: 1,
            //年
            // data:[180,186,196,174,164,190,240,300,340,240,200,160]
            // data:[42,51,49,47,49,65,66,70,70,75,76,76,75,76,73,70,65,60,62,65,70,62,50,30]
            //月
            data:[73,83,78,87,72,75,80,90,70,78,76,79,78,81,81,80,90,86,81,89,84,81,85,83,80,84,78,85,92,76]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
comChart.setOption(com_option);