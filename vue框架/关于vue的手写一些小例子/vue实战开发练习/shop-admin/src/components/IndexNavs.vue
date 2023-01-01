<template>
    <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="3" :offset="0" v-for="(item,index) in iconNavs" :key="index">
            <el-card shadow="hover" @click="$router.push(item.path)">
                <div style="display: flex; justify-content: center;align-items: center;cursor: pointer;flex-direction: column;">
                    <el-icon :size="16">
                        <component :is="item.icon"/>
                    </el-icon>
                    <span style="margin-top: 5px;">{{ item.title }}</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
const iconNavs =  [
        {
            icon:"user",
            color:"text-light-blue-500",
            title:"用户",
            path:"/user/list"
        },
        {
            icon:"shopping-cart",
            color:"text-violet-500",
            title:"商品",
            path:"/goods/list"
        },
        {
            icon:"tickets",
            color:"text-fuchsia-500",
            title:"订单",
            path:"/order/list"
        },
        {
            icon:"chat-dot-square",
            color:"text-teal-500",
            title:"评价",
            path:"/comment/list"
        },
        {
            icon:"picture",
            color:"text-rose-500",
            title:"图库",
            path:"/image/list"
        },
        {
            icon:"bell",
            color:"text-green-500",
            title:"公告",
            path:"/notice/list"
        },
        {
            icon:"set-up",
            color:"text-grey-500",
            title:"配置",
            path:"/setting/base"
        },
        {
            icon:"files",
            color:"text-yellow-500",
            title:"优惠券",
            path:"/coupon/list"
        }
    ]
</script>