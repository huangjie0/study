import axios from "axios";
import {localStorageGet} from '@/common/tool'
const instance = axios.create({
    timeout:5000
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const user = localStorageGet('user')
    if(user){
      config.headers.id = user._id
    }
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
//暴露发请求函数
export function userget(url,params){
  return instance.get(url,params)
}
//暴露修改密码请求
export function userput(url,data){
  return instance.put(url,data)
}
