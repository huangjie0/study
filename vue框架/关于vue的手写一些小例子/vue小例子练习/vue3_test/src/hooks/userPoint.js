import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function(){
    let point = reactive({
        x:0,
        y:0
    })
    function savePoint(e){
        point.x = e.pageX
        point.y = e.pageY
    }
    onMounted(
        ()=>{
        window.addEventListener('click',savePoint)
    }
    )
    onBeforeUnmount(
        ()=>{
        window.removeEventListener('click',savePoint)
    }
    )
    return point
}