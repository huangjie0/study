<template>
  <div>
      <h2>当前求和为:{{sum}}</h2>
      <button @click="sum++">点我++</button>
      <hr>
      <h2>
          {{msg}}
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
  </div>
</template>

<script>
import {reactive,ref,watchEffect} from 'vue'
export default {
    name:'Test',
    setup() {
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
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
        //情况二，监视ref的多个响应式数据
        // watch([sum,msg],(newval,oldval)=>{
        //     console.log('sum的值变化了',newval,oldval)
        // })
        //情况三监视对象方法
        // watch(person,(newvalue,oldvalue)=>{
        //     console.log('person变化了',newvalue,oldvalue)
        // })
        //监听
        watchEffect(()=>{
            const x = sum.value
            const x1 = msg.value
            const x2 = person.age
            console.log('watcheffect所指向回调执行了')
        })
        return {
            sum,
            msg,
            person,
            changName,
            chanegAge
        }
    }
}
</script>

<style scoped>
</style>