<template>
<div>
    <Loading v-if="isShow"/>
    <Header/>
    <router-view></router-view>
</div>

</template>

<script>
import Header from '@/components/header/Header.vue'
import Loading from '@/components/mask/Loading.vue'
import { mapState } from 'vuex'
export default {
    name:'Main',
    components:{
        Header,
        Loading
    },
    computed:{
        ...mapState('mask',['isShow'])
    }
}
</script>

<style lang='less' scoped>
</style>