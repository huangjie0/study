<template>
<div>
  <div v-for="(item,index) in foods" :key="index">
    {{item.name['zh-CN']}}
  </div>
</div>
  
</template>

<script>
import getmenus from '@/api/menus/index.js'
import {mapMutations} from 'vuex'
export default {
    data () {
      return {
        foods:[]
      }
    },
    methods:{
      ...mapMutations('mask',['showLoading','hideLoading']),
      ...mapMutations('requireerr',['showErring','hideErring']),
      ...mapMutations('header',['headerhiding'])
    },
    name:'Menus',
    created() {
      const {id} = this.$route.params
      this.showLoading()
      this.hideErring()
      getmenus(`menu/restaurantId/${id}`).then(res=>{
        const foods = res.data.foods 
        this.foods = foods
      }).catch(err=>{
        this.showErring()
        this.headerhiding()
        console.log(err)
      }).finally(()=>{
        this.hideLoading()
      })
    },
}
</script>

<style lang='less' scoped>
</style>