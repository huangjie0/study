import { createApp } from 'vue'
import './assets/common.css'
import App from './App.vue'
import {router} from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import "@/permission"
import "nprogress/nprogress.css"
const app = createApp(App)
import  permission from "@/directives/permission.js"
app.use(permission)
app.use(router)
app.use(ElementPlus)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')
