//jwt认证机制，jwt通常有三个部分组成，分别是头部，有效荷载，签名，三者之间用.分隔
//jwt使用方式，当客户端收到服务端返回的jwt字符串时，通常将它存储到localStorage和sessionStorage中。
//客户端每次与服务器发生通信时候，都要带上jwt的字符串，从而进行身份认证，推荐做法是把jwt认证放在http请求头的authorization字段中。
