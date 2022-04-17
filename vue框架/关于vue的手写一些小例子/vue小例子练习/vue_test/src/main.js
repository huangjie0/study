import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router/index'

Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter)

const vm = new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
