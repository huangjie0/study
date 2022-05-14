<template>
<div>
    <Header/>
    <router-view></router-view>
</div>

</template>

<script>
import Header from '@/components/header/Header.vue'
export default {
    name:'Main',
    components:{
        Header
    }
}
</script>

<style lang='less' scoped>

</style>