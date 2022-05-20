//导入公共模块
import instance from '@/api/common.js'

//暴露发请求函数
export function userget(url,params){
  return instance.get(url,params)
}
//暴露修改密码请求
export function userput(url,data){
  return instance.put(url,data)
}
