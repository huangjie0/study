const fs=require('fs')
fs.readFile('./files/考试成绩.txt','utf-8',function(err,dataStr){
    //判断是否读取成功
    if(err){
        return console.log("读取文件失败"+err.message);
    }
    const arrold=dataStr.split(" ")
    const arrnew=[];
    arrold.forEach(item=>{
        arrnew.push(item.replace('=',':'));
    }) 
    // console.log(arrnew);
    const newStr = arrnew.join('\r\n');
    // console.log(newStr);
    //调用fs的fs.writefile()
    fs.writeFile('./files/成绩.txt',newStr,function(){
        if(err){
            return console.log("写入文件失败")
        }
        console.log("成绩写入成功")
    })

})