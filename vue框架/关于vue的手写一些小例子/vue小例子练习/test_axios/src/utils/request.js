import axios from 'axios'
//创建一个对象
const instance = axios.create({
    baseURL:'http://gmall-h5-api.atguigu.cn',
    timeout:5000
}) 

//全局拦截器
//请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('全局请求拦截')
    console.log(config)
    config.headers.token = "123456"
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
//响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('全局响应拦截')
    console.log(response)
    if(response.data.code==200){
        console.log('11111111111111111111111111111')
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });






export function get(url,params){
    return instance.get(url,{
        params
    })
}

export function post(url,data){
    return instance.post(url,data)
}