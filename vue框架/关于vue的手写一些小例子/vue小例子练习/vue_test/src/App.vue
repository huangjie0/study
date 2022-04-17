<template>
<div>
<div class="box">
    <banner/>
    <div class="box1">
        <div class="box2">
            <button>
                <router-link to="/about" active-class="active">About</router-link>
            </button>
            <button>
                <router-link to="/home" active-class="active">Home</router-link>
            </button>
        </div>
        <div>
            <router-view></router-view> 
        </div>
    </div>
</div>

</div>
</template>
<script>
import About from './pages/About.vue'
import Banner from './components/Banner.vue'
import Home from './pages/Home.vue'
    export default {
        name:'App',
        components:{
            About,
            Home,
            Banner
        }

    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 800px;
        height: 200px;
        margin: 0 auto;
    }
    .box1{
        width: 400px;
        height: 100px;
        margin-top: 10px;
        margin-left: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .box2{
        width: 100px;
        height: 70px;
        display: flex;
        flex-direction: column;
    }
    .box2>button{
        width: 100px;
        height: 35px;
        font-size: 20px;
        outline: none;
        border: 1px solid rgb(138, 138, 138);
    }
    .active{
        background-color: cadetblue;
        color: white;
    }
    a{
        text-decoration: none;
    }
    a:link{
        color: black;
    }
    a:visited{
        color: rgb(0, 0, 0);
    }
    a:active{
        color: rgb(0, 0, 0);
    }
</style>