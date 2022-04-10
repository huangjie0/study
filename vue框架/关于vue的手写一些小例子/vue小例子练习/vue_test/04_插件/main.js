import Vue from 'vue';
import App from './App.vue';
//导入插件
import plugins from './plugins'
//应用插件
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
