<template>
    <div>
        <h2>学生姓名:{{StudentName}}</h2>
        <h2 @click='add()'>学生年龄:{{Age}}</h2>
    </div>
</template>
<script>
export default {
    name:'studentView',
    data() {
        return {
            StudentName:'黄杰',
            Age:18
        }
    },
    methods: {
        add(){
            this.age++
        }
    },    
}
</script>