<template>
<!-- vue3组件中模板结构可以没有根标签 -->
<div>
  <h1>一个人的信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
</div>
  
</template>

<script>

export default {
  name: 'App',
  //配置数据
  setup() {
    let name='张三'
    let age=18
    //配置一个方法
    function sayHello(){
      alert(`我加${name},我是${age}岁了!`)
    }
    return {
      name,
      age,
      sayHello
    }
  }
}
</script>

<style>
</style>
