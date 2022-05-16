<template>
<div>
  <div v-for="(item,index) in foods" :key="index">
    {{item.name['zh-CN']}}
  </div>
</div>
  
</template>

<script>
import getmenus from '@/api/menus/index.js'
export default {
    data () {
      return {
        foods:[]
      }
    },
    name:'Menus',
    created() {
      const {id} = this.$route.params
      getmenus(`menu/restaurantId/${id}`).then(res=>{
        const foods = res.data.foods 
        this.foods = foods
      }).catch(err=>{
        console.log(err)
      })
    },
}
</script>

<style lang='less' scoped>

</style>