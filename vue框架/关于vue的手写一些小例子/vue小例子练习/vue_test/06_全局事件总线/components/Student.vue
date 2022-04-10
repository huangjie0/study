<template>
    <div class="div1">
        <h2>学生姓名:{{StudentName}}</h2>
        <h2 @click='add()'>学生年龄:{{Age}}</h2>
        <button @click='sendName'>把学生名给school组件</button>
    </div>
</template>
<script>
export default {
    name:'student',
    data() {
        return {
            StudentName:'黄杰',
            Age:18
        }
    },
    methods: {
        add(){
            this.Age++
        },
        sendName(){
            this.$bus.$emit('hello',this.StudentName)
        }
    },   
}
</script>
<style scoped>
.div1{
    background-color: yellow;
    margin-top: 30px;
    padding: 5px;
}
</style>