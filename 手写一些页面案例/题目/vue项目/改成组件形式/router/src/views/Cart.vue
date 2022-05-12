<template>
  <div class="box">
    <ul class="box1">
          <li v-for="item,index of list" :key='item.id'>
              <div class="box2">{{item.name}}</div>
              <div class="box3">
                  <div class="box4">￥:{{item.price}}</div>
                  <div class="box5">
                      <button @click="reduce(index)" :disabled="item.count===1">-</button>
                      <div>{{item.count}}</div>
                      <button @click='add(index)' :disabled="item.count===4">+</button>
                  </div>
              </div>
          </li>
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
export default {
    name:'Cart',
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
      methods: {
          reduce(index){
              this.list[index].count--
          },
          add(index){
              this.list[index].count++
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
      }
}
</script>

<style scoped>
 .box{
      width: 450px;
      height: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      box-shadow: 2px 2px 5px rgb(121, 121, 121);
      background-color: white;
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
  .box3{
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center
  }
  .box4{
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
  }
  .box5{
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 20px;
      background-color: rgb(51, 51, 51);
      color: white;
  }
  .box2{
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
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
  button{
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-radius: 20px;
  }

</style>