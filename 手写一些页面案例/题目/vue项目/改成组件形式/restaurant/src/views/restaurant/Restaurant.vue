<template>
  <div>
      <div v-for="item in arrList" :key="item._id">
          {{item.name['zh-CN']}} 
      </div>
  </div>
</template>

<script>
import  mainget  from '@/api/main/index.js'
export default {
    name:'Restaurant',
    data() {
        return {
            arrList:[]
        }
    },
    created() {
        mainget('/restaurant/location/-74.0059413,40.7127837').then(res=>{
           const {data} = res
           this.arrList = data
        }).catch(err=>{
            console.log(err);
        })
    },
}
</script>

<style lang='less' scoped>

</style>