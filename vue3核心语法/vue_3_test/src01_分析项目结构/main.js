//引入不是vue构造函数，引入是一个名为createApp工厂函数
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)
app.mount('#app');
console.log(app)
