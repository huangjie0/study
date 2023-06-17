<template>
  <div>
    <button @click="isShowDemo = !isShowDemo">点我切换</button>
    <Demo v-if="isShowDemo"/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  setup(){
    let isShowDemo=ref(false)
    return{
      isShowDemo,
    }
  },
  components:{
    Demo
  }
}
</script>

<style>

</style>
