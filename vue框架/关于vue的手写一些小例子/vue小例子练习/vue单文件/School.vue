<template>
    <div>
        <h2>学校名称:{{SchoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>
<script>
export default {
    name:'Student',
    data() {
        return {
            SchoolName:'淮南师范学院',
            address:'安徽淮南'
        }
    }
}
</script>