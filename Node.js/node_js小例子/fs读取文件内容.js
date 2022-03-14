//fs.readFile('path','utf-8',回调函数)
const fs = require('fs');
fs.readFile('./File/1.txt','utf-8',function(err,dataStr){
    console.log(err);
    console.log('-----------------')
    console.log(dataStr);
});



