## 创建数据库
- create database 数据库名称;
## 数据类型
- 整数型：INT BIGINT SMALLINT TINYINT
- 字符串类型：VARCHAR(指定长度)：不定长字符串，实际占用空间根据用户输入的长度来定，最大长度可输入的指定长度。CHAR(占用的长度):定长字符串，无论输入多少都是占用的长度，最大指定占用的长度，不足以占用长度会以空格补齐。
## 时间日期类型
- date日期
- time时间
- timestamp时间戳
- datetime时间和日期
## 浮点型
- float 单精度浮点型
- double 双精度浮点型
## 用例(创建表)
- create table 表名(
                id int primary key comment '学号',
                uname varchar(50) not null comment '姓名',
                sex char(1) not null comment '性别',
                hirdate date comment '入学日期' 
  )comment='学生信息表';
## 插入数据、批量执行可以一次性插入多条数据
- insert into 表名VALUES(id,列名1，列名2，列名3...);
- 可以简写 insert into 表名(id,列名1，列名2，列名3...);
- 多次插入可以写多个sql语句
## 关于插入语句的null问题
- 当字段没有设置not null时，插入时没有赋值，那么显示在表里面内容就是null(空值)。
- 当字段设置了not null时，插入时必须给字段赋值，否则会报错。
## 查询表里的数据
- 查询所有数据:select * from 表名;
- 查询表中部分字段内容：select 列名 from 表名;
- 查询列的具体值:select * from 表名 where 列名='具体值';
- 查看某张表的结构：desc 表名;
- 查看某张表的某几列数值：select 列名1,列名2..from 表名;
- 查看某张表的反值：select * from 表名 where 列名！='具体值';
- 查询某张表的空值:select * from 表名 where 列名 is null;
- 查询某张表的不为空值:select * from 表名 where 列名 is not null;
- 算数比较符号：> < >= <= = != <>
- 查询列表的比值：select * from 表名 where 列名>数值;
- 算数运算符号：+ - * /
- 逻辑运算符号：and or 先and后or,括号优先。
- 如果是空值则需要判断一下在查询：ifnull(列名，0)，将空值设置默认值0或者其他。
- where和having的区别：having通常是前面的select语句执行过程后再进行条件判断，where通常是在前面的select语句里的方法执行之前进行条件判断。
- 给列名起名字：select 列名 as 别名 from 表名 having 别名>值;
- 比较表里面的数值进行查询：select * from 表名 where 列名 between 值 and 值；
- 模糊查询：以开头的 '值%' ，结尾的'%值' 其中一个值'%值%'
- 升序排列查询：order by 列名 asc;
- 降序排列查询：order by 列名 desc;