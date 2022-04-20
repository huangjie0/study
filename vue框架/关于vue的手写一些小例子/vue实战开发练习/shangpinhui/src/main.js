import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import TypeNav from '@/components/TypeNav'
import {reqCategoryList} from '@/api'
import store from '@/store/index'

Vue.component(TypeNav.name,TypeNav);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
