const { resolve } = require("path/posix");

function sendAjax(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                //判断ajax响应体数据
                if(xhr.status>200&&xhr.status<300){
                    resolve(xhr.response)
                }
                reject(xhr.response)
            }
        }
    })
}
sendAjax('https://www.baidu.com').then((xhr)=>{
    console.log('请求成功',xhr);
})
sendAjax('https://www.baidu.com').catch((xhr)=>{
    console.log('请求失败',xhr);
})