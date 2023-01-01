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
import { ref, onMounted } from "vue";
const current = ref("week");
const myChart = null;
onMounted(() => {
  var chartDom = document.getElementById("chart");
  var myChart = echarts.init(chartDom);
  getData()
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
};
function getData() {
  var option;
  option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  option && myChart.setOption(option);
}
</script>