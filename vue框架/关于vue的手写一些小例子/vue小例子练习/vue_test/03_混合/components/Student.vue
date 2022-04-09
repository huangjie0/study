<template>
    <div>
        <h2 @click='showName'>学生姓名:{{Name}}</h2>
        <h2>学生年龄:{{Age}}</h2>
    </div>
</template>
<script>
// import {mixin,mixin2} from '../mixin.js'
export default {
    name:'student',
    data() {
        return {
            Name:'黄杰',
            Age:18
        }
    },
    // mixins:[mixin,mixin2]
}
</script>