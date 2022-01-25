//格式化时间的方法
function dateformat(dateStr){
    const dt = new Date(dateStr);
    const y = dt.getFullYear();
    const m = padZero(dt.getMonth()+1);
    const d = padZero(dt.getDate())

    const hh=padZero(dt.getHours());
    const mm=padZero(dt.getMinutes());
    const ss=padZero(dt.getSeconds())
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
//定义补零操作   
function padZero(n){
    return n>9?n:'0'+n;
}
//定义转义html函数
function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g,(math)=>{
        switch(math){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot'
            case '&':
                return '&amp'
        }
    })
}
//还原html方法
function htmlUnescape(htmlStr){
    return htmlStr.replace(/&gt;|&lt;|&quot;|&amp;/g,(math)=>{
        switch(math){
            case '&gt;':
                return '>'
            case '&lt;':
                return '<'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}
//向外暴露需要的成员
module.exports={
    dateformat,
    htmlEscape,
    htmlUnescape
}

