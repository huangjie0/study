<template>
<div>
    <Loading v-if="isShow"/>
    <Req  v-if="isErr"/>
    <Header/>
    <router-view></router-view>
</div>

</template>

<script>
import Header from '@/components/header/Header.vue'
import Loading from '@/components/mask/Loading.vue'
import Req from '@/components/req/Req.vue'
import { mapState } from 'vuex'
export default {
    name:'Main',
    components:{
        Header,
        Loading,
        Req 
    },
    computed:{
        ...mapState('mask',['isShow']),
        ...mapState('requireerr',['isErr']),
    }
}
</script>

<style lang='less' scoped>
</style>