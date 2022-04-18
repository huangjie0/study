<template>
  <div>
      <TypeNav></TypeNav>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <like/>
      <Floor/>
      <Floor/>
      <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
export default {
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style>

</style>