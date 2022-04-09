<template>
    <div id="root">
        <div class="box">
            <p>To Do List</p>
            <MyHeader :addTodo='addTodo' />
        </div>
       <myList :arrList='arrList' :remove='remove' :changeColor='changeColor'/>
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
            arrList:[
                {id:'001',val:'吃饭',checked:false},
                {id:'002',val:'敲代码',checked:false},
                {id:'003',val:'睡觉',checked:false},
            ]
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
    

}
</script>

<style>
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
.hidden{
    display: none;
}
.gray{
    background-color: #9c9c9c;
}
.fontcolor{
    color: white;
}
</style>