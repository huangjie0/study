<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
        <button @click="sum++">点我+1</button> <hr>
        <h2>当前的信息为:{{msg}}</h2>
        <button @click="msg+='!'">修改信息</button>
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <h2>薪资：{{job.salary}}k</h2>
        <button @click="name+='-'">修改姓名</button>
        <button @click="age++">增长年龄</button>
        <button @click="job.salary++">增长薪资</button>
        <hr>
        <h2>
            当前点击时鼠标坐标为：x:{{point.x}}y:{{point.y}}
        </h2>
    </div>
</template>

<script>
import {ref,toRef,toRefs,shallowReactive, 
    shallowRef,watchEffect,reactive,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
import userPoint from '../hooks/userPoint'
export default {
    name:'Demo',
    setup(){
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = shallowReactive({
            name:'张三',
            age:20,
            job:{
                salary:20
            }
        })
        let point = userPoint()
        //组合式api形式
        onBeforeMount(()=>{
            console.log("onBeforeMount")
        }
        )
        onBeforeUpdate(
            ()=>{
            console.log("onBeforeUpdatet")
        }
        )
        onUpdated(
            ()=>{
            console.log("onUpdated")
        }
        )
        onUnmounted(
            ()=>{
            console.log("onUnmounted")
        }
        )
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
        // const x = toRefs(person)
        // console.log(x)
        return {
            sum,
            msg,
            // name:toRef(person,'name'),
            // age:toRef(person,'age'),
            // salary:toRef(person.job,'salary'),
         
        }
  }

}
</script>

<style>

</style>