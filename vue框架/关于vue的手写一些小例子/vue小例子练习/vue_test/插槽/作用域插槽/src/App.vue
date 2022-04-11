<template>
<div class="div">
    <Category title='美食'>
        <template scope="games">
            <ul>
                <li v-for="(g,index) in games.games" :key="index">{{g}}</li>
            </ul>
        </template>
    </Category>
</div>
</template>
<script>
import Category from './components/Category.vue'
    export default {
        name:'App',
        components:{
            Category
        }
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