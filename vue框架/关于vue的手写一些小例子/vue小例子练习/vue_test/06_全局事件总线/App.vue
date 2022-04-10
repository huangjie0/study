<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School></School>
        <Student></Student>
    </div>
</template>
<script>
    import Student from '../src/components/Student.vue'
    import School  from '../src/components/School.vue'
    export default {
        name:'App',
        components:{
            School,
            Student
        },
        data() {
            return {
                msg:'你好啊！',
            }
        }
    }
</script>
<style scoped>
.app{
    background-color: gray;
}
</style>