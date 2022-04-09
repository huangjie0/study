<template>
    <li @click='change'>
        <i class="fa fa-check"></i><i class="fa fa-close" @click.stop='removeEle()'></i>{{val}}
    </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['val','id','remove','changeColor'],
    methods: {
        removeEle(){
           this.remove(this.id)
        },
        change(){
            this.changeColor(this.id)
        }

    },
}
</script>

<style>
.fa-check{
    width: 50px;
    height: 30px;
    float: left;
    text-align: center;
    line-height: 30px;
}
li{
    width: 800px;
    height: 30px;
    margin: 0 auto;
    line-height: 30px;
    list-style: none;
    background-color:#f3f3f3;
    color: #9c9c9c;
}
li>i{
    width: 50px;
    height: 30px;
    float: right;
    text-align: center;
    line-height: 30px;
}
</style>