import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    //绑定全局事件总线bus
    Vue.prototype.$bus=this
  },
}).$mount('#app')
