<template>
<!-- vue3组件中模板结构可以没有根标签 -->
<div>
  <h1>一个人的信息</h1>
  <!-- <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h3>工作种类:{{person.job.type}}</h3>
  <h3>工作薪水:{{person.job.salary}}</h3>
  <h3>爱好:{{person.hobby[0]}}</h3> -->
  <h3>爱好:{{hobby}}</h3>
  <button @click="changeName">点我修改姓名</button>
  <Test msg='我是vue子组件' age='18'/>
</div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
//引入ref函数
// import {reactive} from 'vue'
import Test from '../src/components/Test'
export default {
  name: 'App',
  components:{
    //注册组件
    Test
  },
  //配置数据
  setup() {
    //变成响应式
    // let name=ref('张三')
    // let age= ref(18)
    // let job = reactive({
    //   type:'前端工程师',
    //   salary:'30k',
    //   a:{
    //     b:{
    //       c:'111'
    //     }
    //   }
    // })
    let hobby=reactive(['抽烟','喝酒','烫头'])
    // let person=reactive({
    //   name:'张三',
    //   age:18,
    //   job:{
    //     type:'前端工程师',
    //     salary:'30k'
    //   },
    //   hobby:['抽烟','喝酒','烫头']
    // })
    //配置一个方法
    // function sayHello(){
    //   alert(`我加${name},我是${age}岁了!`)
    // }
    function changeName(){
      // person.name='李四'
      hobby[0]='jiehhhh'
    }
    //函数靠一个返回值
    return {
      // person,
      hobby,
      changeName
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
