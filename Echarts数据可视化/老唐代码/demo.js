window['moment-range'].extendMoment(moment);

const myChart = echarts.init(document.getElementById("main"),'vintage');

const btnEle = document.querySelector('.btn');




btnEle.onclick = ()=>{
    $.ajax({
        type:'get',
        url:'http://49.235.98.65:8889/order?start=2021-11-19T16:00:00.000Z&end=2021-11-26T16:00:00.000Z',
        success:(data)=>{
            // * 目标时间范围内的订单
            console.log('data: ', data);

            // * 整理时间
            const range = moment.range('2021-11-19', '2021-11-26');
            let days = Array.from(range.by('days'));
            days = days.map(m => m.format('YYYY-MM-DD'))
            console.log('days: ', days);
            
            // * 整理每天订单量
            // * 重构数据源,写出当天
            let result = _.map(data,(item)=>{
                item.time = moment(item.createdAt).format('YYYY-MM-DD');
                return item
            })

            result = _.groupBy(result,'time');
            console.log('result: ', result);

            let countArray = [];
            days.forEach((item)=>{
                // * 如果有单，则放入几单
                if(result[item]){
                    countArray.push(result[item].length)
                }else{
                    // * 如果没有，则是0
                    countArray.push(0)
                }
            })

            const option = {
                xAxis: {
                    type: 'category',
                    data: days
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: countArray,
                        type: 'line'
                    }
                ]
            };

            myChart.setOption(option);
        }
    })
}

