//前端发送agax请求到后端去验证
const input1 = document.querySelector('.input_1')
//给元素绑定事件
input1.onblur=function(){
//获取标签元素
    $.ajax({
        type:'get',
        url:'http://localhost:3000/nameRegist',
        data:{
            name : input1.value,
        },
        success :(data)=>{
            alert(data.data)
            // * 登陆成功去main页面
            location.href = '/passwordRegist'
        }
    })
}