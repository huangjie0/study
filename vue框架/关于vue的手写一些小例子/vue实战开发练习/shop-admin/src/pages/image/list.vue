<template>
  <el-container
    style="background-color: white; border-radius: 5px"
    :style="{ height: h + 'px' }"
  >
    <el-header class="image-header">
        <el-button type="primary" size="small" @click="handleOpenCreate" >新增图片分类</el-button>
    </el-header>
    <el-container>
      <ImageAside ref="ImageAsideRef" />
      <ImageMain />
    </el-container>
  </el-container>
</template>
<script setup>
import ImageAside from "@/components/ImageAside.vue";
import ImageMain from "@/components/ImageMain.vue";
import { ref } from "vue";
const windowHeight = window.innerHeight || document.body.clientHeight;
const h = windowHeight - 64 - 44 - 40;
const ImageAsideRef = ref(null);
const handleOpenCreate = ()=>{
    ImageAsideRef.value.handleCreate()
}
</script>
<style>
.image-header {
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
}
</style>