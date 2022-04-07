<template>
    <div class="box">
        <p>To Do List</p>
        <div class="box1">
            <input type="text" class="input" placeholder="请输入任务" v-model="inputValue">
            <button @click='add()'>Add</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.box{
    margin: 0 auto;
    width: 800px;
    height: 100px;
    background-color: #f4674c;
    position: relative;
}
.box > p{
    width: 800px;
    height: 40px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    position: absolute;
    top: 20px;
    color: white;
    text-shadow: 2px 1px #cfcfcf;
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



</style>