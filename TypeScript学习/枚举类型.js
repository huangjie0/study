"use strict";
exports.__esModule = true;
exports["default"] = {};
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var val;
val = Gender.Female;
val = Gender.Male;
val = 0;
val = 1;
val = 2;
val = 5;
//枚举本质是数值类型，不会报错
console.log(Gender.Male);
console.log(Gender.Female);
