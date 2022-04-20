//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条的样式
import "nprogress/nprogress.css"

//1.利用axios对象方法create创建实例
const requests = axios.create({
    //配置对象
    //接口中，路径都带有api不用手写了
    baseURL:"/api",
    //代表请求超时时间
    timeout:5000
})
//请求拦截器，发请求之前可以检测到，可以在请求发出之前作出事情
requests.interceptors.request.use((config)=>{
    //config是配置对象，有一个请求头
    nprogress.start()
    return config;
})
//相应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数
    nprogress.done()
    return res.data;
},(err)=>{
//服务相应失败信息
    return Promise.reject(new Error('faile'))
})
export default requests