 //封装用户名正则函数
 function reg_name(text){
    //字母数字下划线减号
        var reg_name=/^[0-9a-zA-Z_-]{4,16}$/
        return reg_name.test(text)
    }

    //封装密码正则函数
    function reg_password(text1){
    //8到15位，字母，数字或下划线字符
        var reg_password=/^[a-zA-Z(0-9)|_]{8,15}$/
        return reg_password.test(text1)
    }

    //给第一个标签绑定事件，验证用户名对不对
    var input = document.querySelector('.input_1')
    function a (){
        var input_value = input.value
        var p1 = document.querySelector('.p1');
        var button = document.querySelector('button')
        p1.style.display=reg_name(input_value) ? 'none' : 'block'
        if(input_value.length==0){
            p1.style.display='none'
       }
        if(reg_name(input_value)){
            button.style.cursor='pointer'
            button.style.backgroundColor='#d47b78'

        }else{
            button.style.cursor='not-allowed'
            button.style.backgroundColor='#a5aba5'
        }
        return input_value
    }

    //给第二个input绑定事件并且验证密码对不对
    var input_1 = document.querySelector('.input_2')
    function b(){
        var input1_value = input_1.value
        var button = document.querySelector('button')
        var p2 = document.querySelector('.p2')
        p2.style.display=reg_password(input1_value) ? 'none' : 'block'
            if(input1_value.length==0){
            p2.style.display='none'
        }
        if(reg_password(input1_value)){
            button.style.cursor='pointer'
            button.style.backgroundColor='#d47b78'
        }else{
            button.style.cursor='not-allowed'
            button.style.backgroundColor='#a5aba5'
        }
        return input1_value
    }

    //判断是否可以跳转
    var btn = document.querySelector('button');
    btn.onclick=function(e){
        e = e||window.event
        if(reg_name(a())&&reg_password(b())){
            window.event.returnValue == false;
        }else{
            e.preventDefault();
        }   
    }