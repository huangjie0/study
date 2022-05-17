<template>
  <div class="header">
      <HeaderLeft/>
      <HeaderRight/>
  </div>
</template>

<script>
import HeaderLeft from '@/components/header/HeaderLeft'
import HeaderRight from '@/components/header/HeaderRight'
export default {
    name:'Header',
    components:{
        HeaderLeft,
        HeaderRight
    }
}
</script>

<style scoped lang="less">
.header{
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: brown;
}
</style>