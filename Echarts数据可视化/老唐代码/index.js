const myChart = echarts.init(document.getElementById("main"),'vintage');

// 指定图表的配置项和数据
const option = {
    legend: {},
    tooltip: {},
    dataset: {
      // 提供一份数据。
      source: [
        ['product', '2015', '2016', '2017','2018'],
        ['Matcha Latte', 43.3, 85.8, 93.7,90],
        ['Milk Tea', 83.1, 73.4, 55.1,88.8],
        ['Cheese Cocoa', 86.4, 65.2, 82.5,77,7],
        ['Walnut Brownie', 72.4, 53.9, 39.1,66]
      ]
    },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: { type: 'category' },
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }, { type: 'line' }]
  };

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


// window.onresize = function(){
//     myChart.resize({
//         height:800,
//         width:1200
//     })
// }