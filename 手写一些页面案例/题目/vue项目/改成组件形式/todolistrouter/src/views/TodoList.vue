<template>
<div>
    <Common/>
    <div class="common_2">
        <div class="common_3">
            <div class="div">添加任务:</div>
            <input type="text" class="input_1" @keyup.enter="add()" placeholder="输入任务名称，点击回车即可添加任务" v-model="content">
        </div>
        <div class="common_4">
            <div class="common_5">
                <div class="unfinished" @click="unfinished()" :class="[index==0 ? 'active':'']">
                    未完成任务({{unfinished_1}})
                </div>
                <div class="finished" @click="finished()" :class="[index==1 ? 'active' :'']">
                     已完成任务({{finished_1}})
                </div>
                <div class="all" @click="all()" :class="[index==2 ? 'active' :'']">
                     全部任务({{arrList.length}})
                </div>
            </div>
            <div class="common_6">
                <router-view :arrList='arrList'></router-view>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
import Common from '../components/Common.vue'
import {nanoid} from 'nanoid'
export default {
    name:'TodoList',
    components:{
        Common
    },
    computed:{
        finished_1(){
            return this.arrList.filter(item=>{
                if(item.status) return item
            }).length
        },
        unfinished_1(){
             return this.arrList.filter(item=>{
                if(!item.status) return item
            }).length
        }
    },
    data() {
        return {
            content:'',
            index:0,
            arrList:[],
        }
    },
    methods: {
        add(){
            if(this.content){
                const obj={}
                obj.name = this.content
                obj.id = nanoid()
                obj.status = false
                this.arrList.push(obj)
                this.content=''
            }
        },
        unfinished(){
            this.index = 0
            this.$router.push('/todolist/unfinished')
        },
        finished(){
            this.index = 1
            this.$router.push('/todolist/finished')
        },
        all(){
            this.index = 2
            this.$router.push('/todolist/all')
        }
    },
}
</script>

<style scoped>
.active{
    background-color: #3f9cdb;
    color: white !important;
}
.unfinished{
    width: 200px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #3f9cdb;
    border-radius: 5px;
}
.finished{
    width: 200px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #3f9cdb;
    border-radius: 5px;
}
.all{
    width: 200px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #3f9cdb;
    border-radius: 5px;
}
.common_6{
    width: 800px;
    min-height: 500px;
}
.common_5{
    width: 200px;
    min-height:500px ;
}
.common_4{
    width: 1000px;
    min-height: 500px;
    margin-top: 100px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.div{
    font-size: 15px;
    font-weight: 800;
}
.input_1{
    outline: none;
    border: 0;
    width: 800px;
    height: 35px;
    box-shadow: 0px 0px 5px #888888 ;
}
.common_3{
    width: 100%;
    height: 40px;
    position:absolute;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.common_2{
    width: 1000px;
    min-height: 500px;
    margin: 0 auto;
    position: relative;
}
</style>