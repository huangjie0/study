import request from '@/untils/request'
export function login(data){
    return request({
        method:'POST',
        url:'/app/v1_0/authorizations',
        data
    })
}
