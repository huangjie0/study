<template>
<div class="div">
    <Category title='美食'>
        <img src="../../../../../手写一些页面案例/JD/upload/2222.jpg" alt="">
    </Category>
    <Category title='游戏'>
    <ul>
        <li v-for="g,index in games" :key="index">{{g}}</li>
    </ul>
    </Category>
    <Category title='电影'>
    <ul>
        <li v-for="f,index in films" :key="index">{{f}}</li>
    </ul>

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