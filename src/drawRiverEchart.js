        // 基于准备好的dom，初始化echarts实例
        var riverChart = echarts.init(document.getElementById('overview'),'macarons');

        // 指定图表的配置项和数据
        var 
        option = {
        
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
        
            legend: {
                data: ['1#ts', '2#ts', '3#ts', '4#ts', '5#ts', '6#ts']
            },
        
            singleAxis: {
                top: 50,
                bottom: 50,
                axisTick: {},
                axisLabel: {},
                type: 'time',
                axisPointer: {
                    animation: true,
                    label: {
                        show: true
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        opacity: 0.2
                    }
                }
            },
        
            series: [
                {
                    type: 'themeRiver',
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, 0.8)'
                        }
                    },
                    data: [  
                    // ['2018/11/01',13,'1#ts'], ['2018/11/02',12,'1#ts'], ['2018/11/03',6,'1#ts'], 
                    // ['2018/11/04',6,'1#ts'], ['2018/11/05',15,'1#ts'], ['2018/11/06',18,'1#ts'], 
                    // ['2018/11/07',17,'1#ts'],['2018/11/08',15,'1#ts'],['2018/11/09',16,'1#ts'],['2018/11/10',5,'1#ts'],
                    // ['2018/11/11',7,'1#ts'],['2018/11/12',20,'1#ts'],['2018/11/13',16,'1#ts'],
                    // ['2018/11/14',17,'1#ts'],['2018/11/15',15,'1#ts'],['2018/11/16',17,'1#ts'],
                    // ['2018/11/17',6,'1#ts'],['2018/11/18',5,'1#ts'],['2018/11/19',22,'1#ts'],
                    // ['2018/11/20',26,'1#ts'],['2018/11/21',25,'1#ts'],['2018/11/22',20,'1#ts'],
                    // ['2018/11/23',22,'1#ts'],['2018/11/24',5,'1#ts'],['2018/11/25',6,'1#ts'],
                    // ['2018/11/26',27,'1#ts'],['2018/11/27',28,'1#ts'],['2018/11/28',29,'1#ts'],
                    // ['2018/11/29',27,'1#ts'],['2018/11/30',28,'1#ts'],

                    // ['2018/11/01',20,'2#ts'], ['2018/11/02',22,'2#ts'], ['2018/11/03',10,'2#ts'], ['2018/11/04',9,'2#ts'], ['2018/11/05',23,'2#ts'], ['2018/11/06',24,'2#ts'], ['2018/11/07',26,'2#ts'],
                    // ['2018/11/08',22,'2#ts'],['2018/11/09',23,'2#ts'],['2018/11/10',10,'2#ts'],
                    // ['2018/11/11',10,'2#ts'],['2018/11/12',24,'2#ts'],['2018/11/13',26,'2#ts'],
                    // ['2018/11/14',29,'2#ts'],['2018/11/15',21,'2#ts'],['2018/11/16',28,'2#ts'],
                    // ['2018/11/17',10,'2#ts'],['2018/11/18',10,'2#ts'],['2018/11/19',25,'2#ts'],
                    // ['2018/11/20',26,'2#ts'],['2018/11/21',28,'2#ts'],['2018/11/22',28,'2#ts'],
                    // ['2018/11/23',26,'2#ts'],['2018/11/24',10,'2#ts'],['2018/11/25',10,'2#ts'],
                    // ['2018/11/26',27,'2#ts'],['2018/11/27',30,'2#ts'],['2018/11/28',28,'2#ts'],
                    // ['2018/11/29',29,'2#ts'],['2018/11/30',30,'2#ts'],

                    // ['2018/11/01',30,'3#ts'], ['2018/11/02',31,'3#ts'], ['2018/11/03',15,'3#ts'], ['2018/11/04',15,'3#ts'], ['2018/11/05',33,'3#ts'], ['2018/11/06',35,'3#ts'], ['2018/11/07',34,'3#ts'],
                    // ['2018/11/08',36,'3#ts'],['2018/11/09',33,'3#ts'],['2018/11/10',15,'3#ts'],
                    // ['2018/11/11',15,'3#ts'],['2018/11/12',34,'3#ts'],['2018/11/13',31,'3#ts'],
                    // ['2018/11/14',35,'3#ts'],['2018/11/15',39,'3#ts'],['2018/11/16',36,'3#ts'],
                    // ['2018/11/17',15,'3#ts'],['2018/11/18',15,'3#ts'],['2018/11/19',33,'3#ts'],
                    // ['2018/11/20',34,'3#ts'],['2018/11/21',36,'3#ts'],['2018/11/22',38,'3#ts'],
                    // ['2018/11/23',36,'3#ts'],['2018/11/24',15,'3#ts'],['2018/11/25',15,'3#ts'],
                    // ['2018/11/26',36,'3#ts'],['2018/11/27',37,'3#ts'],['2018/11/28',34,'3#ts'],
                    // ['2018/11/29',37,'3#ts'],['2018/11/30',38,'3#ts'],

                    // ['2018/11/01',21,'4#ts'], ['2018/11/02',22,'4#ts'], ['2018/11/03',10,'4#ts'], ['2018/11/04',10,'4#ts'], ['2018/11/05',20,'4#ts'], ['2018/11/06',22,'4#ts'], ['2018/11/07',23,'4#ts'],
                    // ['2018/11/08',24,'4#ts'],['2018/11/09',22,'4#ts'],['2018/11/10',10,'4#ts'],
                    // ['2018/11/11',10,'4#ts'],['2018/11/12',22,'4#ts'],['2018/11/13',26,'4#ts'],
                    // ['2018/11/14',24,'4#ts'],['2018/11/15',22,'4#ts'],['2018/11/16',24,'4#ts'],
                    // ['2018/11/17',10,'4#ts'],['2018/11/18',10,'4#ts'],['2018/11/19',22,'4#ts'],
                    // ['2018/11/20',23,'4#ts'],['2018/11/21',25,'4#ts'],['2018/11/22',20,'4#ts'],
                    // ['2018/11/23',22,'4#ts'],['2018/11/24',11,'4#ts'],['2018/11/25',12,'4#ts'],
                    // ['2018/11/26',24,'4#ts'],['2018/11/27',22,'4#ts'],['2018/11/28',23,'4#ts'],
                    // ['2018/11/29',22,'4#ts'],['2018/11/30',23,'4#ts'],

                    // ['2018/11/01',40,'5#ts'], ['2018/11/02',41,'5#ts'], ['2018/11/03',15,'5#ts'], ['2018/11/04',16,'5#ts'], ['2018/11/05',42,'5#ts'], ['2018/11/06',43,'5#ts'], ['2018/11/07',44,'5#ts'],
                    // ['2018/11/08',43,'5#ts'],['2018/11/09',45,'5#ts'],['2018/11/10',15,'5#ts'],
                    // ['2018/11/11',18,'5#ts'],['2018/11/12',42,'5#ts'],['2018/11/13',46,'5#ts'],
                    // ['2018/11/14',47,'5#ts'],['2018/11/15',42,'5#ts'],['2018/11/16',47,'5#ts'],
                    // ['2018/11/17',10,'5#ts'],['2018/11/18',11,'5#ts'],['2018/11/19',42,'5#ts'],
                    // ['2018/11/20',46,'5#ts'],['2018/11/21',45,'5#ts'],['2018/11/22',44,'5#ts'],
                    // ['2018/11/23',42,'5#ts'],['2018/11/24',10,'5#ts'],['2018/11/25',11,'5#ts'],
                    // ['2018/11/26',46,'5#ts'],['2018/11/27',42,'5#ts'],['2018/11/28',40,'5#ts'],
                    // ['2018/11/29',47,'5#ts'],['2018/11/30',48,'5#ts'],

                    // ['2018/11/01',20,'6#ts'], ['2018/11/02',20,'6#ts'], ['2018/11/03',10,'6#ts'], ['2018/11/04',10,'6#ts'], ['2018/11/05',21,'6#ts'], ['2018/11/06',23,'6#ts'], ['2018/11/07',23,'6#ts'],
                    // ['2018/11/08',22,'6#ts'],['2018/11/09',25,'6#ts'],['2018/11/10',10,'6#ts'],
                    // ['2018/11/11',11,'6#ts'],['2018/11/12',22,'6#ts'],['2018/11/13',26,'6#ts'],
                    // ['2018/11/14',23,'6#ts'],['2018/11/15',22,'6#ts'],['2018/11/16',25,'6#ts'],
                    // ['2018/11/17',10,'6#ts'],['2018/11/18',10,'6#ts'],['2018/11/19',22,'6#ts'],
                    // ['2018/11/20',26,'6#ts'],['2018/11/21',25,'6#ts'],['2018/11/22',23,'6#ts'],
                    // ['2018/11/23',22,'6#ts'],['2018/11/24',10,'6#ts'],['2018/11/25',11,'6#ts'],
                    // ['2018/11/26',25,'6#ts'],['2018/11/27',22,'6#ts'],['2018/11/28',24,'6#ts'],
                    // ['2018/11/29',22,'6#ts'],['2018/11/30',23,'6#ts']
                    ['2018/11/01',13,'1#ts'], ['2018/11/02',12,'1#ts'], ['2018/11/03',10,'1#ts'], 
                    ['2018/11/04',10,'1#ts'], ['2018/11/05',15,'1#ts'], ['2018/11/06',18,'1#ts'], 
                    ['2018/11/07',17,'1#ts'],['2018/11/08',15,'1#ts'],['2018/11/09',16,'1#ts'],['2018/11/10',5,'1#ts'],
                    ['2018/11/11',12,'1#ts'],['2018/11/12',20,'1#ts'],['2018/11/13',16,'1#ts'],
                    ['2018/11/14',17,'1#ts'],['2018/11/15',15,'1#ts'],['2018/11/16',17,'1#ts'],
                    ['2018/11/17',10,'1#ts'],['2018/11/18',11,'1#ts'],['2018/11/19',22,'1#ts'],
                    ['2018/11/20',26,'1#ts'],['2018/11/21',25,'1#ts'],['2018/11/22',20,'1#ts'],
                    ['2018/11/23',22,'1#ts'],['2018/11/24',10,'1#ts'],['2018/11/25',12,'1#ts'],
                    ['2018/11/26',27,'1#ts'],['2018/11/27',28,'1#ts'],['2018/11/28',29,'1#ts'],
                    ['2018/11/29',27,'1#ts'],['2018/11/30',28,'1#ts'],

                    ['2018/11/01',20,'2#ts'], ['2018/11/02',22,'2#ts'], ['2018/11/03',15,'2#ts'], ['2018/11/04',14,'2#ts'], ['2018/11/05',23,'2#ts'], ['2018/11/06',24,'2#ts'], ['2018/11/07',26,'2#ts'],
                    ['2018/11/08',22,'2#ts'],['2018/11/09',23,'2#ts'],['2018/11/10',16,'2#ts'],
                    ['2018/11/11',15,'2#ts'],['2018/11/12',24,'2#ts'],['2018/11/13',26,'2#ts'],
                    ['2018/11/14',29,'2#ts'],['2018/11/15',21,'2#ts'],['2018/11/16',28,'2#ts'],
                    ['2018/11/17',10,'2#ts'],['2018/11/18',10,'2#ts'],['2018/11/19',25,'2#ts'],
                    ['2018/11/20',26,'2#ts'],['2018/11/21',28,'2#ts'],['2018/11/22',28,'2#ts'],
                    ['2018/11/23',26,'2#ts'],['2018/11/24',17,'2#ts'],['2018/11/25',16,'2#ts'],
                    ['2018/11/26',27,'2#ts'],['2018/11/27',30,'2#ts'],['2018/11/28',28,'2#ts'],
                    ['2018/11/29',29,'2#ts'],['2018/11/30',30,'2#ts'],

                    ['2018/11/01',30,'3#ts'], ['2018/11/02',31,'3#ts'], ['2018/11/03',15,'3#ts'], ['2018/11/04',15,'3#ts'], ['2018/11/05',33,'3#ts'], ['2018/11/06',35,'3#ts'], ['2018/11/07',34,'3#ts'],
                    ['2018/11/08',36,'3#ts'],['2018/11/09',33,'3#ts'],['2018/11/10',20,'3#ts'],
                    ['2018/11/11',22,'3#ts'],['2018/11/12',34,'3#ts'],['2018/11/13',31,'3#ts'],
                    ['2018/11/14',35,'3#ts'],['2018/11/15',39,'3#ts'],['2018/11/16',36,'3#ts'],
                    ['2018/11/17',22,'3#ts'],['2018/11/18',23,'3#ts'],['2018/11/19',33,'3#ts'],
                    ['2018/11/20',34,'3#ts'],['2018/11/21',36,'3#ts'],['2018/11/22',38,'3#ts'],
                    ['2018/11/23',36,'3#ts'],['2018/11/24',23,'3#ts'],['2018/11/25',24,'3#ts'],
                    ['2018/11/26',36,'3#ts'],['2018/11/27',37,'3#ts'],['2018/11/28',34,'3#ts'],
                    ['2018/11/29',37,'3#ts'],['2018/11/30',38,'3#ts'],

                    ['2018/11/01',21,'4#ts'], ['2018/11/02',22,'4#ts'], ['2018/11/03',15,'4#ts'], ['2018/11/04',16,'4#ts'], ['2018/11/05',20,'4#ts'], ['2018/11/06',22,'4#ts'], ['2018/11/07',23,'4#ts'],
                    ['2018/11/08',24,'4#ts'],['2018/11/09',22,'4#ts'],['2018/11/10',16,'4#ts'],
                    ['2018/11/11',17,'4#ts'],['2018/11/12',22,'4#ts'],['2018/11/13',26,'4#ts'],
                    ['2018/11/14',24,'4#ts'],['2018/11/15',22,'4#ts'],['2018/11/16',24,'4#ts'],
                    ['2018/11/17',17,'4#ts'],['2018/11/18',16,'4#ts'],['2018/11/19',22,'4#ts'],
                    ['2018/11/20',23,'4#ts'],['2018/11/21',25,'4#ts'],['2018/11/22',20,'4#ts'],
                    ['2018/11/23',22,'4#ts'],['2018/11/24',16,'4#ts'],['2018/11/25',17,'4#ts'],
                    ['2018/11/26',24,'4#ts'],['2018/11/27',22,'4#ts'],['2018/11/28',23,'4#ts'],
                    ['2018/11/29',22,'4#ts'],['2018/11/30',23,'4#ts'],

                    ['2018/11/01',40,'5#ts'], ['2018/11/02',41,'5#ts'], ['2018/11/03',22,'5#ts'], ['2018/11/04',24,'5#ts'], ['2018/11/05',42,'5#ts'], ['2018/11/06',43,'5#ts'], ['2018/11/07',44,'5#ts'],
                    ['2018/11/08',43,'5#ts'],['2018/11/09',45,'5#ts'],['2018/11/10',30,'5#ts'],
                    ['2018/11/11',31,'5#ts'],['2018/11/12',42,'5#ts'],['2018/11/13',46,'5#ts'],
                    ['2018/11/14',47,'5#ts'],['2018/11/15',42,'5#ts'],['2018/11/16',47,'5#ts'],
                    ['2018/11/17',32,'5#ts'],['2018/11/18',30,'5#ts'],['2018/11/19',42,'5#ts'],
                    ['2018/11/20',46,'5#ts'],['2018/11/21',45,'5#ts'],['2018/11/22',44,'5#ts'],
                    ['2018/11/23',42,'5#ts'],['2018/11/24',31,'5#ts'],['2018/11/25',30,'5#ts'],
                    ['2018/11/26',46,'5#ts'],['2018/11/27',42,'5#ts'],['2018/11/28',40,'5#ts'],
                    ['2018/11/29',47,'5#ts'],['2018/11/30',48,'5#ts'],

                    ['2018/11/01',20,'6#ts'], ['2018/11/02',20,'6#ts'], ['2018/11/03',15,'6#ts'], ['2018/11/04',15,'6#ts'], ['2018/11/05',21,'6#ts'], ['2018/11/06',23,'6#ts'], ['2018/11/07',23,'6#ts'],
                    ['2018/11/08',22,'6#ts'],['2018/11/09',25,'6#ts'],['2018/11/10',15,'6#ts'],
                    ['2018/11/11',16,'6#ts'],['2018/11/12',22,'6#ts'],['2018/11/13',26,'6#ts'],
                    ['2018/11/14',23,'6#ts'],['2018/11/15',22,'6#ts'],['2018/11/16',25,'6#ts'],
                    ['2018/11/17',15,'6#ts'],['2018/11/18',16,'6#ts'],['2018/11/19',22,'6#ts'],
                    ['2018/11/20',26,'6#ts'],['2018/11/21',25,'6#ts'],['2018/11/22',23,'6#ts'],
                    ['2018/11/23',22,'6#ts'],['2018/11/24',15,'6#ts'],['2018/11/25',16,'6#ts'],
                    ['2018/11/26',25,'6#ts'],['2018/11/27',22,'6#ts'],['2018/11/28',24,'6#ts'],
                    ['2018/11/29',22,'6#ts'],['2018/11/30',23,'6#ts']
                    ]
                }
            ]
        };
        

        // 使用刚指定的配置项和数据显示图表。
        riverChart.setOption(option);