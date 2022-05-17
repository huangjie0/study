import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import '@/assets/common.css'
import { Form,FormItem,Input,Button,Select,Option} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Form)
Vue.use(FormItem )
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
