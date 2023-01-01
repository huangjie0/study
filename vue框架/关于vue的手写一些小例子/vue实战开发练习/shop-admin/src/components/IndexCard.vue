<template>
    <el-card shadow="never">
        <template #header>
        <div style="display: flex; justify-content: space-between;">
            <span>{{ title }}</span>
            <el-tag type="danger">
                {{ tip }}
            </el-tag>
        </div>
        </template>
        <el-row :gutter="20">
            <el-col :span="6" :offset="0" v-for="(item,index) in btns" :key="index">
                <el-card shadow="hover" style="border: 0;background-color:#7991;">
                    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
                        <span style="font-size: 20px;"> {{ item.value }} </span>
                        <span style="font-size: 14px;"> {{ item.label }} </span>
                    </div>
                </el-card>
                
            </el-col>
        </el-row>
    </el-card>
    
</template>
<script setup>
defineProps({
    title:String,
    tip:String,
    btns:Array
})
</script>