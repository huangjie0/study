<template>
    <div id="root">
        <div class="box">
            <p>To Do List</p>
            <MyHeader @addTodo='addTodo' />
        </div>
       <myList :arrList='arrList'/>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
export default {
    name:'App',
    components:{MyHeader,MyList},
    data () {
        return {
            arrList:JSON.parse(localStorage.getItem('todos')),
        }
    },
    methods: {
        addTodo(todoObj){
            this.arrList.push(todoObj)
        },
        remove(id){
            var index
            this.arrList.forEach((ele,i)=>{
                    if(ele.id === id){
                        index = i
                    }
                })
            this.arrList.splice(index,1)  
        },
        changeColor(id){
                var index;
                this.arrList.forEach((ele,i)=>{
                    if(ele.id === id){
                        index = i
                    }
                })
                this.arrList[index].checked=!this.arrList[index].checked
            },

    },
    watch:{
        // arrList(value){
        //     localStorage.setItem('todos',JSON.stringify(value))
        // }
        arrList:{
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }
    },
    mounted() {
        this.$bus.$on('remove',this.remove)
        this.$bus.$on('changeColor',this.changeColor)
    },
    beforeDestroy() {
        this.$bus.off(['remove','changeColor'])
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.box{
    margin: 0 auto;
    width: 800px;
    height: 100px;
    background-color: #f4674c;
    position: relative;
}
.box > p{
    width: 800px;
    height: 40px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    position: absolute;
    top: 20px;
    color: white;
    text-shadow: 2px 1px #cfcfcf;
}

</style>