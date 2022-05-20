
//暴露模块
import instance from '@/api/common'

//暴露发请求函数
export function getshop(url,params){
    return instance.get(url,{
        params
    })
}
export function putshop(url,data){
    return instance.put(url,data)
}