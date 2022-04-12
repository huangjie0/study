<template>
<div class="box">
        <ul class="box1">
            <GoodList v-for="(item,index) of list" :key='item.id' :index='index' :item='item' @reduce='reduce' @add='add'>
            <i class="fa fa-thumbs-o-up" :slot="item.id=='001'||item.id=='003'?'putao':''"></i>
            </GoodList>
        </ul>
        <div class="div">
            <div class="div1">
                <div class="div2">
                    总价:{{fullPrice}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoodList from './components/GoodList'
export default {
    name:'App',
    components:{
      GoodList
    },
    data() {
      return {
        list:[
              {id:'001',name:'葡萄',price:10,count:1},
              {id:'002',name:'苹果',price:15,count:1},
              {id:'003',name:'桃子',price:20,count:1},
              {id:'004',name:'梨子',price:15,count:1},
              ],
      }
    },
    computed:{
            fullPrice(){
                let sum = 0;
                this.list.forEach((item)=>{
                    sum+=item.count*item.price
                })
                return sum
            }
        },
    methods: {
      reduce(index){
         this.list[index].count--
      },
      add(index){
        this.list[index].count++
      }
    },
}
</script>

<style scoped>
  *{
      margin: 0;
      padding: 0;
  }
  .box{
      width: 450px;
      height: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      box-shadow: 2px 2px 5px rgb(121, 121, 121);
  }
  .box1{
      width: 400px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      list-style: none;
  }
  .box1>li{
      width: 400px;
      height: 50px;
      background-color: rgb(212, 212, 212);
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .div{
      width: 450px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .div1{
      width: 400px;
      height: 40px;
  }
  .div2{
      width: 120px;
      height: 40px;
      float: right;
      line-height: 40px;
      text-align: center;
  }
  .fa-thumbs-o-up{
    color: red;
  }
</style>
