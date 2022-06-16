<template>
<!-- vue3组件中模板结构可以没有根标签 -->
<div>
  <h1>一个人的信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h3>工作种类:{{job.type}}</h3>
  <h3>工作薪水:{{job.salary}}</h3>
  <button @click="changeUserinfo()">修改人物信息</button>
</div>
</template>

<script>
//引入ref函数
import {ref} from 'vue'
export default {
  name: 'App',
  //配置数据
  setup() {
    //变成响应式
    let name=ref('张三')
    let age= ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })
    //配置一个方法
    // function sayHello(){
    //   alert(`我加${name},我是${age}岁了!`)
    // }
    function changeUserinfo(){
      console.log(name.value)
      console.log(age.value)
      // job.value.type='ui设计师'
      console.log(job.value)
    }
    //函数靠一个返回值
    return {
      name,
      age,
      changeUserinfo,
      job
    }
    //返回是一个渲染函数
    // return ()=>{
    //   return h('h1','黄石')
    // }
  }
}
</script>

<style>
</style>
