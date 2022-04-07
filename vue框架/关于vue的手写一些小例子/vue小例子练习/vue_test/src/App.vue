<template>
  <div>
      <Student name='黄杰' sex='男' :age='18'/>
      <Student name='皇子' sex='女' :age='20'/>
  </div>
</template>

<script>
//引入组件
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        Student
    }
}
</script>