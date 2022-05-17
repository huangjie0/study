<template>
  <div class="err">
      <div class="err_1" ref="err" @click="change">
          <div>
              请求失败，请重试！！！！！
          </div>
          <div>
              <button @click="cancel()">确定</button>
          </div>
      </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name:'Req',
    methods: {
        ...mapMutations('requireerr',['hideErring']),
        cancel(){
            this.hideErring();
        },
        change(){
            console.log(this.$refs.err)
        }
    },
}
</script>

<style lang='less' scoped> 
.err{
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: black;
    position:fixed;
    top: 0;
    left: 0;
    .err_1{
        width: 300px;
        height: 300px;
        background-color: white;   
        display: flex;
        justify-content: center;
        align-items: center;     
        position: fixed;
        top: 30%;
        left: 45%;
    }
}
</style>