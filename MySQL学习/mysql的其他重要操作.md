## mysql常用函数
- 将字符串转化成大写upper --->select upper('字符串') from dual;
- 将字符串转化成小写lower --->select lower('字符串') from dual;
- 替换指定的字符串：replace();----->select replace('字符串'，'替换的值','被替换的值') from dual;
- 查询指定的字符串出现在字符串中的位置，instr--如果查询的结果为0，表示指定的字符串不存在，空格会占用一个位置。
- select instr(列表名字,'指定的字符串') from 表名 where 条件;
- 返回字符串的长度 length---->select length(列表名字) from 表名 where 条件;
- 连接多个字符串或多个字段 concat----->select concat(列表名1，列表名2) from 表名;
- 查询目标数值的最近并且小于它的一个整数----->select floor(浮点数) from dual;
- 将字符串倒序排列 reverse----->select reverse('字符串') from dual;
- 截取字符串的一部分substr()---->select substr('字符串',指定开始字符，截取长度) from dual;
## 修改表字段
- 给表加字段---->alter table 表名 add 新加的列表名 char(长度);
- 删除字段----->alter table 表名 drop 列表名;
- 修改数据库的字段类型长度，非空属性---->alter table 表名 MODIFY 列表名 varchaer(长度) null;
- 修改数据库字段的名称，也可以修改类型和长度----->alter table 表名 change 列表名 varchar(长度);
- 修改表的名称----->rename table 表名 to 被修改的名字;
## 给用户设置权限
- 创建用户----->create user '用户名'@'localhost' identified by '密码';
- 删除用户----->drop user '用户名'@'localhost';
- 给用户赋值权限 *表示所有的数据表或者数据库
- localhost:本机，ip地址，%：表示所有的ip地址 all privileges:所有的权限
- grant select,insert on 数据库名.表名 to '用户名'@'localhost';
- 刷新权限flush privileges;
- 查看用户在某个ip地址上有哪些权限---->show grants for '用户名'@'localhost';
- 从用户收回权限----->revoke insert on 数据库名.表名 from '用户名'@'localhost';
- flush privileges;
- 查看数据库的用户------>select * from mysql.user;
# 创建视图
- create view 视图名 as select * from 表名 order by 条件;