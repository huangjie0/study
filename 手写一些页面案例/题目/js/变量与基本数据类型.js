//字面量与变量的区别
// 答：字面量是一个固定的值，字面是什么含义就是什么含义，而变量是通过var来声明一个变量存储空间来储存的值。

// JavaScript的基本数据类型有哪些
//答：有五种数据类型：string,number,布尔，nudefined,null.

//如何把变量html里面的class属性值'box'换成变量cssname，如何把'box1'里的1换成变量num
// var cssname = 'box'
// var num = 1
// var html = '<div class="box">这里是box1</div>'
// var cssname='box';
// var num=1;

// var html = '<div class="'+cssname +'"'+'>这里是box'+num+'</div>'
// alert(html);
//第四题
// Number(null)
// isNaN(null)
// parseFloat('1.6px')+parseInt('1.2px') + typeof parseInt(null)
// 选做
// isNaN(Number(!!Number(parseInt("0.8"))))
// typeof !parseInt(null) + !isNaN(null);

// Number(null):0
// isNaN(null):false
// parseFloat('1.6px')+parseInt('1.2px') + typeof parseInt(null):2.6number
// typeof !parseInt(null) + !isNaN(null):booleantrue
// isNaN(Number(!!Number(parseInt("0.8")))):false



//代码题目
var name = prompt("请输入您的姓名:");
var age = Number(prompt("请输入您的年龄:"));
var age_1= age+5;
var gender = prompt("请输入您的性别:");
console.log("您的姓名是:"+name + ",您的年龄是:"+ age + ",您的性别是:" + gender);
console.log('据我估计，五年后，你可能'+ age_1 +'岁了');






