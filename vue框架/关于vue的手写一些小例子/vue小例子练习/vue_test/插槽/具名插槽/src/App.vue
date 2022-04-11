<template>
<div class="div">
    <Category title='美食'>
        <img slot="center" src="../../../../../手写一些页面案例/JD/upload/2222.jpg" alt="">
        <a slot="footer" href="https://www.baidu.com">美食</a>
    </Category>
    <Category title='游戏'>
    <ul slot="center">
        <li  v-for="g,index in games" :key="index">{{g}}</li>
    </ul>
    <template v-slot:footer>
        <a href="https://www.baidu.com">游戏</a>
        <a href="https://www.baidu.com">游戏</a>
        <a href="https://www.baidu.com">游戏</a>
    </template>
  
    </Category>
    <Category title='电影'>
    <ul slot="center">
        <li v-for="f,index in films" :key="index">{{f}}</li>
    </ul>
    <a slot="footer" href="https://www.baidu.com">电影</a>
    </Category>
</div>
</template>
<script>
import Category from './components/Category.vue'
    export default {
        name:'App',
        components:{
            Category
        },
        data() {
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['qq飞车','lol','cf','超级玛丽'],
                films:['你好，李焕英','离婚','教父']
            }
        },
    }
</script>
<style scoped>
.div{
    display: flex;
    justify-content: space-around;

}
img{
    width: 200px;
    height: 200px;
}
</style>