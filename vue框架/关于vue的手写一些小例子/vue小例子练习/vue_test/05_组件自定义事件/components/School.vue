<template>
    <div class="div">
        <h2>学校名称:{{SchoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click='sendSchoolName'>把学校名给app</button>
    </div>
</template>
<script>
export default {
    name:'school',
    data() {
        return {
            SchoolName:'淮南师范学院',
            address:'安徽淮南'
        }
    },
    props:['getSchoolName'],
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.SchoolName)
        }
    },
}
</script>
<style scoped>
.div{
    background-color:skyblue;
    padding: 5px;
    margin-top: 30px;
}
</style>