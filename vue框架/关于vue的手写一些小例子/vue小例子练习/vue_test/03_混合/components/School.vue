<template>
    <div>
        <h2 @click='showName'>学校名称:{{Name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>
<script>
// import { mixin,mixin2} from '../mixin'
export default {
    name:'school',
    data() {
        return {
            Name:'淮南师范学院',
            address:'安徽淮南',
            x:20
        }
    },
    // mixins:[mixin,mixin2]
}
</script>