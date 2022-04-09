<template>
  <div>
      <h1 v-text="msg" ref="msg"></h1>
      <button @click='show'>点我输出上方的dom元素</button>
      <Student name='黄杰' sex='男' :age='18'/>
      <Student name='皇子' sex='女' :age='20' ref="stu"/>
  </div>
</template>

<script>
//引入组件
import Student from './components/Student.vue'
export default {
    name:'App',
    data() {
        return {
            msg:'欢迎学习vue'
        }
    },
    components:{
        Student
    },
    methods: {
        show(){
            // console.log(this.$refs.msg)
            console.log(this.$refs.stu)//拿到组件实例对象
        }
    },
}
</script>