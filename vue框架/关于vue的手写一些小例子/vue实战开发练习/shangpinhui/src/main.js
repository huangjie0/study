import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import TypeNav from '@/pages/Home/TypeNav'
import {reqCategoryList} from '@/api'
import store from '@/store/index'

Vue.component(TypeNav.name,TypeNav);
Vue.config.productionTip = false
reqCategoryList()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
