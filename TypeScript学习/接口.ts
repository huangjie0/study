export default {}
interface FULLNAME{
    firstName:string,
    lastName:string
}
let person:FULLNAME = {
    firstName:"黄",
    lastName:'姐'
}
console.log(person.firstName);
function hello({firstName,lastName}:FULLNAME):void{
    console.log(firstName + lastName);
}
hello(person)