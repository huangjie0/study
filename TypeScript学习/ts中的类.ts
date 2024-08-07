// class Person{
//     public name:string;
//     //构造函数
//     constructor(name:string){
//         this.name = name;
//     }
//     run():void{
//         console.log(this.name);  
//     }
//     getName():string{
//         return this.name
//     }
//     setName(name:string):void{
//         this.name = name
//     }
// }
// let pe = new Person('黄杰');
// pe.run()
// pe.getName()

//继承
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var pdd = new Person('黄杰')
// pdd.run()

// class web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     work(){
//         alert(`${this.name}在运动`)
//     }
// }
// var wd = new web('李四');
// console.log(wd.run());

// 修饰符
// 三种修饰符 public protected private
// class Person{
//     public name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var pdd = new Person('黄杰')
// pdd.run()
    
// class web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     work(){
//         alert(`${this.name}在运动`)
//     }
// }
// var wd = new web('李四');
// console.log(wd.run());

//保护类型
// class Person{
//     protected name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var pdd = new Person('黄杰')
// pdd.run()
// console.log(pdd.name);

    
// class web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     work(){
//         alert(`${this.name}在运动`)
//     }
// }
// var wd = new web('李四');
// console.log(wd.run());
// console.log(wd.name);


//私有
// class Person{
//     private name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var pdd = new Person('黄杰')
// pdd.run()
    
// class web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     work(){
//         alert(`${this.name}在运动`) //无法访问
//     }
// }
// var wd = new web('李四');
// console.log(wd.run());

//静态属性静态方法
// class Person{
//     public name:string
//     static age = 18
//     static print(){
//         alert('静态方法')
//     }
//     constructor(name:string){
//         this.name=name
//     }
//     run(){
//         alert(`${this.name}在工作`)
//     }
//     work(){
//         alert(`${this.name}在工作`)
//     }
// }
// var p11 = new Person('张三')
// p11.run()
// Person.print() 
// console.log(Person.age);

//多态
// class Animal{
//     public name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(){
//         console.log('吃的方法');
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         console.log(this.name + '吃粮食');
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         console.log(this.name + '猫粮');
//     }
// }

//抽象方法，子类包含eat方法
abstract class Animal{
    public name:string
    constructor(name:string){
        this.name = name
    }
    abstract eat():any
}
// var a = new Animal()
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log(this.name + '吃粮食');
        
    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log(this.name + '吃老鼠');
    }
}
var d = new Dog('小花')
d.eat()
var c = new Cat('猫')
c.eat()














