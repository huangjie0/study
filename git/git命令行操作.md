# Git命令行操作
## 本地库初始化
- 命令：git init
- 注意：.git目录存放的是本地库相关的子目录和文件，不要删除和不要修改。
## 设置签名
- 用户名：huangjie0  Email地址：1364045672@qq.com
- 作用：区分不同开发人员的身份
- 辨析：这里设置签名和登录远程库代码托管中心账号和密码没有关系
- 命令
   - 项目级别/仓库级别：仅在当前本地库范围内有效
      - git config user.name huangjie0
      - git config user.email 1364045672@qq.com
      - 信息保存位置：./.git/config文件
   - 系统用户级别：登录当前操作用户范围
      - git config --global user.name huangjie0
      - git config --global user.email 1364045672@qq.com
   - 优先级
      - 就近原则：项目级别优先于系统用户级别，二者都有时采用项目级别的签名
      - 如果只有系统级别，就以系统用户级别为准
      - 二者都没有不允许
## 基本操作
- 状态查看操作：git status 查看工作区和暂存区状态
- 添加操作: git add[文件名] 将工作区新建/修改添加到暂存区
- 提交操作：git commit -m"meessage"[文件名] 将暂存区的内容提交到本地库
- 查看历史记录： 
   - git log 最完整的日志 多屏显示控制方式 空格向下翻页，b向上翻页，q退出
   - git log --pretty=oneline
   - git long --oneline
   - git reflog 显示版本移动步数
- 前进后退
   - 基于索引值操作【推荐】 git reset --hard[哈希值]
   - 使用^符号 只能往后退  git reset --hard HEAD^...
   - 使用~符号 git reset --hard HEAD~n 后退n步
- reset命令三个参数对比
   - --soft参数
      - 在本地库移动指针
   - --mixed参数
      - 在本地库移动指针
      - 重置暂存区
   - --hard参数
      - 在本地库移动指针
      - 重置暂存区
      - 重置工作区
   - 删除文件并找回
      - 前提：删除前，文件存在时的状态提交到本地库
      - 操作：git reset --hard[指针位置]/HEAD
         - 删除操作已经提交到本地库：指针指向历史记录
         - 删除操作尚未提交到本地库，指针为HEAD
- 比较文件差异
   - git diff [文件名] 将工作区的文件和暂存区中进行比较
   - git diff [本地库中历史版本] [文件名] 将工作区中的文件与本地库历史记录做比较
   - 不带文件名比较多个文件
 - 分支管理
   - 什么分支：在版本控制中，使用多条线进行同时推进
   - 分支操作：
      - 创建分支:git branch[分支名]
      - 查看分支：git branch -v
      - 切换分支：git checkout[分支名]
      - 合并分支：第一步，切换到接受修改的分支上(被合并，增加新内容)上，第二步执行命令 git merge [修改的分支名]
      - 解决冲突：1.编辑文件 2.把文件修改到满意为止保存退出 3.git add [文件名] 4.git commit -m"日志信息" 注意，commit不能带文件名
## Github
- 推送代码地址设置 git remote add [别名] [远程仓库地址]
- 推送 git push [别名] [分支名]
- 查看别名以及 仓库地址 git remote -v
- 










































