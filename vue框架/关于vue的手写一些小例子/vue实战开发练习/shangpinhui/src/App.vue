<template>
<div>
  <Header></Header>
  <span>我是根组件</span>
  <Footer></Footer>
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
  }
}
</script>

<style>

</style>
