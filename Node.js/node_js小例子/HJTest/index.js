//这是包的入口文件
function dateFormat(dateStr){
    const dt= new Date(dateStr);
    const year = dt.getFullYear();
    const month = zero(dt.getMonth()+1);
    const day = zero(dt.getDate());
    const hour = zero(dt.getHours())
    const minutes = zero(dt.getMinutes())
    const seconds=zero(dt.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
}
//补零操作
function zero(n){
    return n>9?n:'0'+n
}
//转义字符串的方法
function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g,(math)=>{
        switch (math){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'

        }
    })
}
//定义将转义字符转换为html
function StrEscape(Str){
    return Str.replace(/&lt;|&gt;|&quot;|&amp;/g,(math)=>{
        switch(math){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
            case '&frasl;':
                return '/'
        }
    })
}
//向外暴露需要的成员
module.exports={
    dateFormat,
    htmlEscape,
    StrEscape
}