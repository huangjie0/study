<template>
<div>
  <Header></Header>
  <router-view></router-view>
  <Footer v-show="$route.meta.show"></Footer>
</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'App',
  components:{
    Header,
    Footer
  },
  mounted() {
        // 通知vuex发请求存储仓库当中
    this.$store.dispatch('categoryList');
  },
}
</script>
<style>
</style>
