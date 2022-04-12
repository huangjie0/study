let users = [
{
    name:'tom',
    score:80,
    class:'A'
},
{
    name:'lucy',
    score:90,
    class:'A'
},
{
    name:'nacy',
    score:83,
    class:'B'
},
{
    name:'jack',
    score:84,
    class:'A'
},{
    name:'lily',
    score:91,
        class:'A'
      }
]
// let users=[
//     { name: 'lily', score: 91 },
//     { name: 'lucy', score: 90 },
//     { name: 'jack', score: 84 },
//     { name: 'tom', score: 80 }
//     ]
//导入lodash库
const _=require('lodash');
const A = _.filter(users,function(a){
    return a.class='A'
})
const A1 = _.orderBy(A,['score'],['desc'])
const [a,b,c,d] =[...A1]
const a1 = [_.omit(a,['class'])]
const a2=[_.omit(b,['class'])]
const a3=[_.omit(c,['class'])]
const a4=[_.omit(d,['class'])]
console.log( _.concat(a1,a2,a3,a4))