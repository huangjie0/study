<template>
  <div class="box">
    <div class="box1">
      {{time}}
    </div>
    <div class="box2">
      step: <input type="text" v-model.number="step">
    </div>
    <div class="box3">
      time: <input type="text" v-model.number="time_2">
    </div>
    <div class="box4">
      选择: <select v-model.number="n">
          <option value="1">计时器1</option>
          <option value="2">计时器2</option>
      </select>
    </div>
    <button @click="change">修改</button>
    <div class="box5">计时器1:</div>
    <div class="box6">{{number}}</div>
    <button @click="start1">start</button>
    <button @click="stop1">stop</button>
    <div class="box5">计时器2:</div>
    <div class="box6">{{number1}}</div>
    <button @click="start2">start</button>
    <button @click="stop2">stop</button>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      step:0,
      number:0,
      number1:0,
      time_2:100,
      n:1,
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
      clock:null,
      clock_1:null,
      clock_2:null
    }
  },
  methods: {
    change(){
      clearInterval(this.clock_1)
      this.clock_1 = setInterval(()=>{
        this.number=this.number+this.step
      },1000)
    },
    start1(){
      clearInterval(this.clock_1)
      this.clock_1 = setInterval(()=>{
        this.number=this.number+this.step
      },1000)
    },
    stop1(){
      clearInterval(this.clock_1)
    },
    stop2(){
      clearInterval(this.clock_2)
    },
    start2(){
      clearInterval(this.clock_2)
      this.clock_2=setInterval(()=>{
        this.number1++
      },1000)
    }
  },
  mounted(){
    this.clock = setInterval(()=>{
      this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    },1000)

  },
    beforeDestroy(){
      clearInterval(this.clock)
  },
}
</script>

<style scoped>
  .box{
    width: 300px;
    height: 520px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 0px rgb(102, 102, 102);
  }
  *{
    margin: 0;
    padding: 0;
  }
  .box1{
    width: 300px;
    height: 50px;
    line-height: 50px;
  }
  .box2{
    width: 300px;
    height: 50px;
    line-height: 50px;

  }
  .box3{
    width: 300px;
    height: 50px;
    line-height: 50px;
  }
  .box4{
    width: 300px;
    height: 50px;
    line-height: 50px;
  }
  button{
    width: 80px;
    height: 30px;
  }
  .box5{
    width: 300px;
    height:50px;
    line-height: 50px;
  }
  .box6{
    width: 300px;
    height: 50px;
    line-height: 50px;
  }
</style>
