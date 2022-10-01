import App from './App'
// #ifndef VUE3
import Vue from 'vue'
//导入网络请求的包
import {$http} from '@escook/request-miniprogram'
import store from './store/index.js'
uni.$http = $http
//请求的根路径
$http.baseUrl = 'https://api-ugo-web.itheima.net'
uni.$showMsg=function(title='数据请求失败',duration=1500){
	uni.showToast({
		title,
		duration,
		icon:'none'
	})
}
//配置请求拦截器loading效果
$http.beforeRequest = function(){
	uni.showLoading({
		title:"数据加载中..."
	})
}
//配置相应拦截器关闭loading效果
$http.afterRequest = function () {
	uni.hideLoading()
}

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
	store
  }
}
// #endif