## 查询表，只显示前n行记录
- select * from 表名 limit n;
## 查询表，结果显示n到m行记录
- select * from 表名 limit n-1,m-1;
## 创建一张附表
- create table 附表名 as select * from 之前表名 limit n;
## 复制表里的数据到另外一张表里面
- insert into 新表 select * from 旧表 where ....(满足的条件);
## 子查询
- 表中套入子表进行查询筛选;
## 分组函数
- group by 
## 聚合函数
- 使用max,min,avg(平均值)，count(统计数量) sum求和；
## 查询当前系统日期和时间
- select SYSDATE() from dual;
- select now() from dual;
## 查询当前系统的日期
- select CURRENT_DATE from dual;
- select CURDATE() from dual;
## 查询当前系统的时间
- select CURRENT_TIME from dual;
- select CURTIME() from dual;
## 数学运算
- +-*/%
## 多表联合查询
- 通过内连接查询--查询两张表中完全匹配的结果：select * from 表名 inner join 另一张表 on 满足的条件;
## 外连接的方式
- 左外连接：select * from 表名 left join 另一张表 on 满足的条件筛选；
- 右连接：select * from 表名 right join 另一张表 on 满足的条件筛选；
## 更新表中的数据
- 首先可以复制一份原先的表然后进行操作；update 表名 set + 要修改的值进行赋值 + where + 满足的条件
## 删除表中的数据
- 可以使用delete、drop、truncate
- 使用delete方法删除可以进行的操作
- 开始一个删除任务模式 START TRANSACTION;
- 删除表中所有数据 delete from 表名;
- 删除具体的信息
- delete from 表名 where 条件;
- commit;提交到数据库
- ROLLBACK;进行回滚
## 删除操作的区别
- delete：1.可以回滚2.可以带条件删除3.速度慢4.删除后不会回收空间
- TRUNCATE：1.不能回滚2.不能带条件3.速度快4.删除后可以回收空间
- drop：1.删除表结构以及数据2.不能回滚3.速度最快4.可以回收空间