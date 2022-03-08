var btn = document.querySelector('button');
    var input = document.querySelector('input');
    input.oninput=function(){
        btn.onclick=function(){
            //点击添加渲染页面
            if(input.value.length!=0){
                var ul = document.querySelector('ul');
                var li = document.createElement('li');
                var i = document.createElement('i');
                var i1=document.createElement('i');
                i1.setAttribute("class","fa fa-remove")
                i.setAttribute("class","fa fa-check hidden");
                li.innerText=input.value
                ul.appendChild(li);
                li.appendChild(i);
                li.appendChild(i1);
                i1.onclick=function(){
                ul.removeChild(li);
                }
                //定义开关控制里面样式
                var flag=false;
                li.onclick=function(){
                    flag=!flag
                    if(flag){
                        li.style.background='#9c9c9c'
                        li.style.color='#f3f3f3'
                        li.style.textDecoration='line-through'
                        i.style.display='block'
                    }else{
                        li.style.background='#f3f3f3'
                        li.style.color='#9c9c9c'
                        li.style.textDecoration='none'
                        i.style.display='none'
                    }
                }
            }    
        }  
    }