<template>
  <div>
      <TypeNav></TypeNav>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <like/>
      <Floor v-for="(floor,index) in floorList" :key="floor.id" :list='floor'/>
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
import { reqFloors } from '../../api/index';
import {mapState} from 'vuex'
export default {
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getGetfloorList')
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }
}
</script>

<style>

</style>