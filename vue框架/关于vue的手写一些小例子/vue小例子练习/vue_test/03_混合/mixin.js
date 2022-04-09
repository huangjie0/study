export const mixin={
    methods: {
        showName(){
            alert(this.Name)
        }
    },
    mounted() {
        console.log('你好啊')
    },
}
export const mixin2={
    data() {
        return {
            x:100,
            y:200
        }
    },
}