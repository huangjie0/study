<template>
  <div>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName"> <br>
    名：<input type="text" v-model="person.lastName"> <br>
    全名：<span>{{person.fullName}}</span> <br>
    全名：<input type="text" v-model="person.fullName">
  </div>
</template>

<script>
import {reactive,computed} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            firstName :'张',
            lastName:'三',
            fullName:computed({
                get(){
                    return person.firstName + '-' + person.lastName
                },
                set(value){
                    const nameArr = value.split('-')
                    person.firstName = nameArr[0]
                    person.lastName = nameArr[1]
                }
            })
        })
        return {
            person
        }
  }

}
</script>

<style>

</style>