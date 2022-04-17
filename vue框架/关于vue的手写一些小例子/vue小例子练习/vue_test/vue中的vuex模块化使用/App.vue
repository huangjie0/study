<template>
<div>
    <Count/><hr>
    <Person/>
</div>
</template>
<script>
import Count from './components/Count.vue'
import Person from './components/person.vue'
    export default {
        name:'App',
        components:{
            Count,
            Person
        }
    }
</script>
<style scoped>
</style>