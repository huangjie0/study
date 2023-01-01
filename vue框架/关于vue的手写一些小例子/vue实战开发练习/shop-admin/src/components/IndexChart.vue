<template>
  <el-card shadow="never">
    <template #header>
      <div style="display: flex; justify-content: space-between">
        <span>订单统计</span>
        <div>
          <el-check-tag
            @click="handlerChoose(item.value)"
            v-for="(item, index) in options"
            :key="index"
            :checked="current == item.value"
            style="margin-right: 8px"
            >{{ item.text }}</el-check-tag
          >
        </div>
      </div>
    </template>
    <div id="chart" style="width: 100%; height: 300px"></div>
  </el-card>
</template>
<script setup>
import * as echarts from "echarts";
import { ref, onMounted,onBeforeUnmount } from "vue";
import { getStatistics3 } from "@/api/index.js";
const current = ref("week");
const myChart = null;
onMounted(() => {
  getData();
});
const options = [
  {
    text: "近1个月",
    value: "month",
  },
  {
    text: "近1周",
    value: "week",
  },
  {
    text: "近24小时",
    value: "hour",
  },
];
const handlerChoose = (type) => {
  current.value = type;
  getData();
};
function getData() {
  var chartDom = document.getElementById("chart");
  var myChart = echarts.init(chartDom);
  let option = {
    xAxis: {
      type: "category",
      data: [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };
  myChart.showLoading()
  getStatistics3(current.value).then((res) => {
    option.xAxis.data = res.x;
    option.series[0].data = res.y;
    myChart.setOption(option);
  }).finally(()=>{
    myChart.hideLoading()
  })
}
onBeforeUnmount(()=>{
    if(myChart) echarts.dispose(myChart)
})
</script>