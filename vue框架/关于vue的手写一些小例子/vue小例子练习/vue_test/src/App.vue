<template>
    <div class="app">
        <h1>{{msg}},学生的姓名是{{Sname}}</h1>
        <!-- 通过父组件给子组件通过传递函数类型的props实现，子给父传递数据 -->
        <School :getSchoolName='getSchoolName'></School>
        <!-- 使用native告诉vue是原生事件 -->
        <Student @getStudentName='getStudentName' @demo='m1' @click.native='show'></Student>
        <!-- <Student ref="student"></Student> -->
    </div>
</template>
<script>
    import Student from '../src/components/Student.vue'
    import School  from '../src/components/School.vue'
    export default {
        name:'App',
        components:{
            School,
            Student
        },
        data() {
            return {
                msg:'你好啊！',
                Sname:''
            }
        },
        methods: {
            getSchoolName(name){
                console.log('app收到了学校名',name)
            },
            getStudentName(name,...arg){
                console.log('app收到了学生名',name,arg)
                this.Sname=name
            },
            m1(){
                console.log('demo事件被触发了')
            },
            show(){
                console.log('1232')
            }

        },
        // mounted() {
        //     setTimeout(()=>{
        //           this.$refs.student.$once('getStudentName',this.getStudentName)
        //     },5000)
        // },
    }
</script>
<style scoped>
.app{
    background-color: gray;
}
</style>