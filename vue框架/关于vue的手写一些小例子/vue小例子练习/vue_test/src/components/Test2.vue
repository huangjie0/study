<template>
<div>
      <button @click='isShow=!isShow'>显示与隐藏</button>
      <transition-group name='hello' appear>
          <h1 v-show='isShow' class="go" key="1">你好啊！</h1>
          <h1 v-show='isShow' class="go" key="2">你好啊！</h1>
      </transition-group>
</div>

</template>

<script>
export default {
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
h1{
    background-color: orange;
}
.hello-enter,.hello-leave-to{
    transform: translateX(-100%);
}
.hello-enter-to,.hello-leave{
    transform: translateX(0px);
}
.hello-enter-active,.hello-leave-active{
    transition: 1s linear;
}
</style>