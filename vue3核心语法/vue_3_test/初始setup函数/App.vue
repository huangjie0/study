<template>
<!-- vue3组件中模板结构可以没有根标签 -->
<div>
  <h1>一个人的信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别:{{sex}}</h2>
  <button @click="sayWelcome()">vue2所配置的信息</button>
  <br>
  <button @click="sayHello">说话</button>
  <button @click="test">tests</button>
</div>
</template>

<script>
// import { h } from 'vue'
export default {
  name: 'App',
  data() {
    return {
      sex:'男'
    }
  },
  methods: {
    sayWelcome(){
      alert('你好啊!')
    },
    test(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
    }
  },
  //配置数据
  setup() {
    let name='张三'
    let age=18
    //配置一个方法
    function sayHello(){
      alert(`我加${name},我是${age}岁了!`)
    }
    //函数靠一个返回值
    return {
      name,
      age,
      sayHello
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
