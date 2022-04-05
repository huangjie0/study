<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>
<script>
    import Student from './Student.vue'
    import School  from './School.vue'
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>