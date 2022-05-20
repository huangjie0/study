
import instance from '@/api/common'

//暴露发请求函数
export default function registerpost(url,data){
  return instance.post(url,data)
}