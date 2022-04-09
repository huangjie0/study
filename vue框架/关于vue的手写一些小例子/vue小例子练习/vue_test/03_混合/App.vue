<template>
    <div>
        <Student></Student>
        <School></School>
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
        }
    }
</script>