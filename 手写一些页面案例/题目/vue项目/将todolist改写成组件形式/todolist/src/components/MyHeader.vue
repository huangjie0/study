<template>
    <div class="box1">
        <input type="text" class="input" placeholder="请输入任务" v-model="inputValue">
        <button @click='add'>Add</button>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data() {
        return {
            inputValue:''
        }
    },
    methods: {
        add(){
            if(!this.inputValue.trim()) return alert('输入不能为空')
            //将用户的输入包装成一个对象
            const arrList = {id:nanoid(),val:this.inputValue,checked:false}
            this.addTodo(arrList)
            this.inputValue=''
        }
    },
    props:['addTodo']

}
</script>

<style>
.box1{
    width: 600px;
    height: 30px;
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    top: 50px;
    left: 100px;
}
.input::-webkit-input-placeholder {
    color: #a5aba5;
    font-size: 10px;
}
.input{
    font-size: 17px;
    color: #9c9c9c;
}
.input{
    width: 400px;
    height: 30px;
    border: 0;
    outline-style: none;
}
button{
    width: 200px;
    height: 30px;
    border: 0;
    outline: none;
    margin-left: 0;
    font-size: 20px;
    background-color: #e2e2e2;
    color: #9c9c9c;
}
button:hover{
    cursor: pointer;
}
</style>