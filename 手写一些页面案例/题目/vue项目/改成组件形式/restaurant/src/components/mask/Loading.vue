<template>
    <div class="mask">
        <img class="img" src="@/assets/loding.gif">
    </div>
</template>

<script>

export default {
    name:'Loading',
}
</script>

<style lang='less' scoped>
.mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    .img{
        width: 800px;
        height: 400px;
        opacity: 0.7;
        position: fixed;
        top: 25%;
        left: 25%;
    }
}

</style>