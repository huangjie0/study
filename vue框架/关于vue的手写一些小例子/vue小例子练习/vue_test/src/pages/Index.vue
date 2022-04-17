<template>
<div>
    <ul>
        <li v-for="l in list" :key="l.id">
            <!-- <router-link :to="`/home/index/detail?id=${l.id}&title=${l.title}`">{{l.title}}</router-link> -->
            <router-link :to="{
                path:'/home/index/detail',
                query:{
                    id:l.id,
                    title:l.title
                }
            }">{{l.title}}
            </router-link>
        </li>
    </ul><hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name:'Index',
    data() {
        return {
            list:[
                {id:'001',title:'信息001'},
                {id:'002',title:'信息002'},
                {id:'003',title:'信息003'}
            ]
        }
    },
}
</script>