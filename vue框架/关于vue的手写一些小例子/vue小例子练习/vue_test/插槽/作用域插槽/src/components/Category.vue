<template>
<div class="category">
    <h3>{{title}}分类</h3>
    <slot :games='games'></slot>
</div>
  
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data() {
        return {
            games:['qq飞车','lol','cf','超级玛丽']
        }
    },
}
</script>

<style>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}

</style>