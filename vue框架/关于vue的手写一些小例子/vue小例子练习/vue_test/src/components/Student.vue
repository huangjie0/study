<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名:{{name}}</h2>
      <h2>学校性别:{{sex}}</h2>
      <h2>学校年龄:{{MyAge}}</h2>
      <button @click='changeage()'>点我修改年龄</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            msg:'我是一名淮师学生',
            MyAge:this.age
        }
    },
    methods: {
        changeage(){
            this.MyAge++
        }
    },
    // props:['name','sex','age']简单声明接受
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }//接受的同时对数据进行数据限制,默认值得制定必要性限制
    props:{
        name:{
            type:String,
            required:true,//名字是必须要传的
        },
        sex:{
            type:String,
            required:true,//名字是必须要传的
        },
        age:{
            type:Number,
            // required:false,//名字是必须要传的
            default:99
        }
    }
}
</script>