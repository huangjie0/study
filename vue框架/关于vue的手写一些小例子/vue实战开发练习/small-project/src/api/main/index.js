import axios from "axios";
const instance = axios.create({
    baseURL:'http://49.235.98.65:3000',
    timeout:5000
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
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
