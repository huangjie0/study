export default {}
interface Counter{
    (start:number):number,
    interval:string,
    reset():void
}
function getCounter():Counter{
    let counter = <Counter>function(start:number){};
    counter.interval = 'hello'
    counter.reset = function(){}
    return counter
}