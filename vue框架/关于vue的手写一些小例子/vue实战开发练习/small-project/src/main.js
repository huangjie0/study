import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
// import { Button, Select } from 'element-ui';

Vue.config.productionTip = false

// Vue.use(Button)
// Vue.use(Select)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
