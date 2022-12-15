<template>
  <div>
    <h1>一个人的信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sayHello">说话</button> <br/>
    <button @click="sayWelcome">vue2配置的--sayWelcome</button>
    <br>
    <button @click="test1">测试一下，在vue2读取vue3数据方法</button><br>
    <button @click="test2">测试一下，在vue3读取vue2数据方法</button>
  </div>
</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
  data(){
    return{
      sex:'男'
    }
  },
  methods:{
    sayWelcome(){
      alert('欢迎来的我的课堂！')
    },
    test1(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },
  setup(){
    let name = 'zs'
    let age = 18
    function sayHello() {
      alert(`我叫${name},我是${age}岁了!`)
    }
    function test2(){
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.sex)
      console.log(this.sayWelcome)
    }
    return {
      name,
      age,
      sayHello,
      test2
    }
    //返回是一个渲染函数
    // return ()=>{
    //   return h('h1','你好')
    // }
  }
}
</script>

<style>

</style>
