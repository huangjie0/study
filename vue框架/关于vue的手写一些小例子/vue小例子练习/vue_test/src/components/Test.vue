<template>
<div>
      <button @click='isShow=!isShow'>显示与隐藏</button>
      <transition name='hello' appear>
          <h1 v-show='isShow' class="go">你好啊！</h1>
      </transition>
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
.hello-enter-active{
    animation: huangjie 1s;
}
.hello-leave-active{
    animation: huangjie 1s reverse;
}
@keyframes huangjie {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>