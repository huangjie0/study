<template>
    <div class="div1">
        <h2>学生姓名:{{StudentName}}</h2>
        <h2 @click='add()'>学生年龄:{{Age}}</h2>
        <button @click='sendStudentName'>点我把学生名交给app</button>
        <button @click='unbind'>解绑事件</button>
    </div>
</template>
<script>
export default {
    name:'studentView',
    data() {
        return {
            StudentName:'黄杰',
            Age:18
        }
    },
    methods: {
        add(){
            this.age++
        },
        sendStudentName(){
            this.$emit('getStudentName',this.StudentName,666,888,900)
            this.$emit('demo')
        },
        unbind(){
            // this.$off('getStudentName')
            // this.$off(['getStudentName','demo'])
            //所有事件全部解绑
            this.$off()
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