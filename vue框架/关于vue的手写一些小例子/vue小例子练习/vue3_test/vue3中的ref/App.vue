<template>
  <div>
    <h1>一个人的信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h3>工作种类：{{job.type}}</h3>
    <h3>工作薪水：{{job.salary}}</h3>
    <button @click="changeInfo">修改人的信息</button>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = ref('zs')
    let age = ref(18)
    let job = reactive({
      type:"前端工程师",
      salary:'30k'
    })
    function changeInfo(){
      name.value = 'ls'
      age.value = 48
      job.type = 'UI设计师'
      job.salary = '50k'
    }
    return {
      name,
      age,
      changeInfo,
      job
    }
  }
}
</script>

<style>

</style>
