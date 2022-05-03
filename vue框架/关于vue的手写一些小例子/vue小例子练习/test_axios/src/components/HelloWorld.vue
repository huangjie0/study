<template>
  <div>
    <button @click="getHandle">发送get请求</button>
    <button @click="postHandle">发送post请求</button>
  </div>
</template>

<script>
// import axios from 'axios'
import {get} from '../utils/request'
import {post} from '../utils/request'
export default {
  name:'HelloWorld',
  methods: {
      getHandle(){
        // get请求，参数一表示地址，参数二是配置（params表示传递的数据，以url参数拼接请求地址后面，headers表示请求头）
        // axios.get('http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',{
        //   params:{},
        //   headers:{}
        // }).then(res=>{
        //   console.log(res)
        // }).catch(err=>{
        //   console.log(err)
        // })
        get('api/product/getBaseCategoryList').then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      },
      postHandle(){
        //post请求传递三个参数，第一个是地址，数据在请求体中传递，第三个是配置信息，默认是json格式的
        // axios.post('http://gmall-h5-api.atguigu.cn/api/list',{
        //   pageNo:1,pageSize: 10
        // },{}).then(res=>{
        //   console.log(res)
        // }).catch(err=>{
        //   console.log(err)
        // })
        post('api/list',{pageNo:1,pageSize:10}).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      }
  },
}
</script>

<style scoped>

</style>
