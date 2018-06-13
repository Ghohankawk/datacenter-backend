# datacenter-backend

## 项目介绍

基于node.js + express + mysql实现的restful风格的CRUD的后台接口，应对简单的后端接口需求，不用再用比较重的springmvc+spring+mybatis

### 组织结构

```
├── app.js -- 应用配置
├── bin
│   └── www -- 项目运行脚本
├── conf
│   └── mysqlConf.js -- mysql配置文件
├── dao
│   ├── userDAO.js -- 封装和数据库的交互
│   └── userSqlMap.js -- SQL语句封装
├── model
│   └── result.js -- 返回结果对象封装
├── package.json -- 依赖模块
└── routes
    └── users.js -- 用户操作路由及业务逻辑
└── sql
    └── users.sql -- 用户表的数据库DML和DDL
```

### 模块依赖

```
www -> app.js -> users.js ->  userDAO.js -> mysqlConf.js & userSqlMap.js
```

### 技术选型

 后端技术
- node.js
- express

## 项目运行

1. 下载代码并部署

```
git clone https://github.com/Ghohankawk/datacenter-backend.git
cd datacenter-backend && npm install   #安装部署依赖的包
```

2. 修改conf/mysqlConf.js中数据库配置信息

3. 启动

```
# 切换到项目根路径
npm start
```

## 请求实例

1. 查询全部用户
```
get http://localhost:1990/users
```
2. 查询某个用户
```
get http://localhost:1990/users/1
```
3. 新增一个用户
```
post http://localhost:1990/users/
body  name = hank
      passoward = hellworld
	  age = 29
```
4. 修改一个用户（所有字段）
```
假设上面新增的用户名的id为2
put http://localhost:1990/users/2
body  name = hank2
      passoward = hellworld2
	  age = 292
```
5. 修改一个用户（某些字段）
```
假设上面新增的用户名的id为2
patch http://localhost:1990/users/2
body  name = hank3
```
6. 删除一个用户
```
delete http://localhost:1990/users/2
```