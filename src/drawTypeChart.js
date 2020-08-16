// 基于准备好的dom，初始化echarts实例
var pieChart = echarts.init(document.getElementById('user-type'),'macarons');
var option_pie = {
    title: {
        text: '',
        // subtext: '纯属虚构',
        x: 'center',
        textStyle:{
            fontSize:16,
            fontStyle:'normal',
            fontWeight:'normal'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)",
        position:'bottom'
    },
 
    legend: {
        orient: 'horizontal',
        left: '20px',
        data: ['General industry', 'Big industry', 'Resident', 'agriculture', 'other'],
        top:'10%'
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '40%',
        center: ['50%', '60%'],
        data: [{
                value: 821,
                name: 'General industry'
            },
            {
                value: 123,
                name: 'Big industry'
            },
            {
                value: 89,
                name: 'Resident'
            },
            {
                value: 1,
                name: 'agriculture'
            },
            {
                value: 50,
                name: 'other'
            }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        lableLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
    }
]
};

pieChart.setOption(option_pie);