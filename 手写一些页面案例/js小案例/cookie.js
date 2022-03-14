/**
 *
 *设置cookie
 * @param {String} key 你要设置的key值
 * @param {String} value 你要设置的value值
 * @param {Number} expires 你要设置时间的值
 */
function setCookie(key,value,expires){
    //    expires表示过期时间
    if(!expires){
        document.cookie=`${key}=${value}`
        return
    }
    const time = new Date();
    const t = time.getTime()-1000*60*60*8+1000*expires;
    time.setTime(t);
    document.cookie=`${key}=${value};expires=${time}`
   }
