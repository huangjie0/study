//es5
// // 函数声明法
// function run(){
//     return 'run'
// }
// //匿名函数
// var run2 = function(){
//     return 'run2'
// }
// ts中定义函数
function run() {
    return 'run';
}
var run2 = function () {
    return '123';
};
console.log(run());
console.log(run2());
//ts定义方法传参
function getInfo(name, age) {
    return "".concat(name, "---").concat(age);
}
console.log(getInfo('张三', 20));
var getInfo2 = function (name, age) {
    return "".concat(name, "+++").concat(age);
};
//无返回值
function run3() {
    console.log('run');
}
run3();
// 方法可选参数
function getInfo3(name, age) {
    return "".concat(name, "======").concat(age);
}
console.log(getInfo3('hello'));
//默认参数
function getInfo4(name, age) {
    if (age === void 0) { age = 20; }
    return "".concat(name, "||||").concat(age);
}
console.log(getInfo4('huangjie'));
//剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
console.log(sum(1, 2, 3, 4));
function sum2() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum2(1, 3, 4, 5, 6, 7));
function sum3(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum2(1, 3, 4, 5, 6, 7));
