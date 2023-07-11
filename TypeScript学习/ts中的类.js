var Person = /** @class */ (function () {
    //构造函数
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var pe = new Person('黄杰');
pe.run();
