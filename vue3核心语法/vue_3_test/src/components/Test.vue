<template>
  <div>
      <h2>当前求和为:{{sum}}</h2>
      <button @click="sum++">点我++</button>
      <hr>
      <h2>
          {{msg}}
      </h2>
      <h2>
          {{person.a.b}}
      </h2>
      <button @click="msg+='!'">
          修改信息
      </button>
      <hr>
      <h2>
          姓名:{{person.name}}
          年龄:{{person.age}}
      </h2>
      <button @click="changName()">
          修改姓名
      </button>
      <button @click="chanegAge()">
          增长年龄
      </button>
      <button @click="listen()">
          监听对象某个属性
      </button>
  </div>
</template>

<script>
import {reactive,ref,watch} from 'vue'
export default {
    name:'Test',
    setup() {
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name:'张三',
            age:18,
            a:{
                b:1
            }
        })
        //情况一，监视ref的一个响应式数据
        // watch(sum,(newval,oldval)=>{
        //     console.log('sum的值变化了',newval,oldval)
        // },{
        //     immediate:true,
        //     // deep:true
        // })
        //定义两个改变的函数
        function changName(){
            person.name='李四'
        }

        function chanegAge(){
            person.age += 1
        }
        function listen(){
            person.a.b++
        }
        //情况二，监视ref的多个响应式数据
        // watch([sum,msg],(newval,oldval)=>{
        //     console.log('sum的值变化了',newval,oldval)
        // })
        //情况三监视对象方法
        // watch(person,(newvalue,oldvalue)=>{
        //     console.log('person变化了',newvalue,oldvalue)
        // })
        //情况四监听对象写法某个属性
        watch(()=>{person.a.b},(newval,oldvalue)=>{
            console.log('prson变化了',newval,oldvalue)
        })
        return {
            sum,
            msg,
            person,
            changName,
            chanegAge,
            listen
        }
    }
}
</script>

<style scoped>
</style>