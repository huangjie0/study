export default {}
enum Gender{
    Male,
    Female
}
let val:Gender;
val = Gender.Female
val = Gender.Male
val = 0
val = 1
val = 2
val = 5
//枚举本质是数值类型，不会报错
console.log(Gender.Male);
console.log(Gender.Female);
enum Gender2{
    Male = 5,
    Female
}
console.log(Gender2.Female);
enum Gender3{
    Male,
    Female = 5
}
console.log(Gender3.Male);
enum Gender4{
    Male = 100,
    Female = 120
}
console.log(Gender4.Male);
console.log(Gender4.Female);



