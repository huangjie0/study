<template>
  <el-main class="image-main">
    <div class="top">
      <el-scrollbar>
        <div v-for="i in 100" :key="i">{{ i }}</div>
      </el-scrollbar>
    </div>
    <div class="bottom">分页部分</div>
  </el-main>
</template>
<style>
.image-main{
    position: relative;
}
.image-main .top{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 50px;
    overflow-y: auto;
}
.image-main .bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    height: 50px;
    left: 0;
    right: 0;
}
</style>