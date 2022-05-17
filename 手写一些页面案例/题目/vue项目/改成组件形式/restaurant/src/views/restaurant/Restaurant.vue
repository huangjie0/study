<template>
  <div>
      <div v-for="item in arrList" :key="item._id" @click="change(item)">
          {{item.name['zh-CN']}} 
      </div>
  </div>
</template>

<script>
import  mainget  from '@/api/main/index.js'
import {mapMutations} from 'vuex'
export default {
    name:'Restaurant',
    data() {
        return {
            arrList:[]
        }
    },
    methods: {
        change(item){
            this.$router.push(`/main/menus/${item._id}`)
        },
        ...mapMutations('mask',['showLoading','hideLoading']),
        ...mapMutations('requireerr',['showErring','hideErring']),
        ...mapMutations('header',['headerhiding'])
    },
    created() {
        this.hideErring()
        mainget('/restaurant/location/-74.0059413,40.7127837').then((res)=>{
            const {data} = res
            this.arrList = data
            this.showLoading()
        }).catch((err)=>{
            this.showErring()
            this.headerhiding()
            console.log(err)
        }).finally(()=>{
            this.hideLoading()
        })
    }
}
</script>

<style lang='less' scoped>
</style>