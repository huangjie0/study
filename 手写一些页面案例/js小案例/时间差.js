function dateformat (current,target){
    //拿到时间戳
    var time1=current.getTime();
    var time2=target.getTime();
    //转换为秒
    var diffMs=Math.ceil((time2-time1)/1000);
    //换算成天 时 分 秒
    var day=Math.floor(diffMs/(60*60*24))
    var hour=Math.floor(diffMs%(60*60*24)/3600)
    var minutes=Math.floor(diffMs%3600/60)
    var seconds=diffMs%60;  
    return {day:day,hour:hour,minutes:minutes,seconds:seconds}
}