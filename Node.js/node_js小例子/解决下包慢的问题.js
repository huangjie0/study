//为什么下包的速度比较慢，因为包在美国，通过光缆传输到中国来，解决问题就是安装淘宝镜像源
//淘宝的npm镜像源来下载
//国内淘宝服务器放在国内
//查看当前文件下的镜像源：npm config get registry
//切换到国内淘宝的镜像源，npm config set registry=https://registry.npm.taobao.org/
//通过npm包管理，将nrm安装为全局可用工具，npm i nrm -g
//查看所有所用的镜像源，nrm ls
//将下包镜像源切换为淘宝镜像源：nrm use taobao
//npm i 包名 -D，开发依赖包，会被记录到devDependencies 节点下
//npm i 包名，核心依赖包，会被记录到dependencies节点下
//安装全局包，npm i 包名 -g全局安装指定的包，npm uninstall 包名 -g卸载全局包
//只有工具性质的包，才有全局安装的必要性，因为它提供好用的终端命令
