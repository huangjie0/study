<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
        <button @click="sum++">点我+1</button> <hr>
        <h2>当前的信息为:{{msg}}</h2>
        <button @click="msg+='!'">修改信息</button>
        <h2>姓名：{{person.name}}</h2>
        <h2>年龄：{{person.age}}</h2>
        <h2>薪资：{{person.job.salary}}k</h2>
        <button @click="person.name+='-'">修改姓名</button>
        <button @click="person.age++">增长年龄</button>
        <button @click="person.job.salary++">增长薪资</button>
    </div>
</template>

<script>
import {ref,watchEffect,reactive} from 'vue'
export default {
    name:'Demo',
    setup(){
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name:'张三',
            age:20,
            job:{
                salary:20
            }
        })
        // watch(sum,(newValue,oldValue)=>{
        //     console.log(newValue,oldValue)
        // },{
        //     immediate:true
        // })
        //监视ref定义响应式数据
        // watch([sum,msg],(newValue,oldValue)=>{
        //     console.log(newValue,oldValue)
        // },{
        //     immediate:true
        // })
        // reactive所定义响应式数据，无法获得oldvalue,强制配置深度监视
        // watch(person,(newValue,oldValue)=>{
        //     console.log('person变化了！')
        //     console.log(newValue,oldValue)
        // })
        // watch(()=>person.age,(newValue,oldValue)=>{
        //     console.log('person变化了！')
        //     console.log(newValue,oldValue)
        // })
        // watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
        //     console.log('person变化了！')
        //     console.log(newValue,oldValue)
        // })
        // watch(()=>person.job,(newValue,oldValue)=>{
        //     console.log('person变化了！')
        //     console.log(newValue,oldValue)
        // },{
        //     deep:true
        // })
        watchEffect(()=>{
            const x1 = sum.value
            const x2 = person.job.salary
            console.log('回调执行了')
        })

        return {
            sum,
            msg,
            person
        }
  }

}
</script>

<style>

</style>