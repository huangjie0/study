<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" :offset="0" v-for="(item,index) in panels" :key="index">
                <el-card shadow="hover" class="card">
                    <template #header>
                        <div style="display: flex; justify-content: space-between;font-size: 13px;">
                            <span>{{ item.title }}</span>
                            <el-tag :type="item.unitColor" effect="plain">{{ item.unit }}</el-tag>
                        </div>
                    </template>
                    <!-- card body -->
                    <span style="font-size: 30px;font-weight: bold;">
                        <CountTo :value="item.value"/>
                    </span>
                    <el-divider/>
                    <div style="display: flex; justify-content: space-between;font-size: 13px;color: gray;">
                        <span>{{ item.subTitle }}</span>
                        <span>{{  item.subValue }}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <IndexNavs/>
        <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :span="12" :offset="0">
                <IndexChart/>
            </el-col>
            <el-col :span="12" :offset="0"></el-col>
        </el-row>
    </div>
</template>
<script setup>
import { getStatistics1 } from "@/api/index.js" 
import { ref } from "vue"
import CountTo from "@/components/CountTo.vue";
import IndexNavs from "@/components/IndexNavs.vue"
import IndexChart from "../components/IndexChart.vue";
const panels = ref([])
getStatistics1().then(res=>{
    panels.value = res.panels
})
</script>
<style>
.card{
    border: 0;
}
</style>