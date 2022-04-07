<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>
<script>
    import Student from '../src/components/Student.vue'
    import School  from '../src/components/Student.vue'
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>