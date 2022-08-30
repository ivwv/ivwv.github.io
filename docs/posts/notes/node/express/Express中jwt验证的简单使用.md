---
title: Express中jwt验证的简单使用
description: Express中jwt验证的简单使用  express框架和jsonwebtoken插件的应用
isOriginal: true
icon: Nodejs
date: 2022-07-30
category:
  - 我的学习笔记
  - Node
tag:
  - express
  - jwt

# 是否置顶
sticky: false
# 是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前
star: false
# 是否将该文章添加至文章列表中。
article: true
# 是否将该文章添加至时间线中。
timeline: true
---
<CountView></CountView>


::: tip 导读
express框架和jsonwebtoken插件的应用
:::
<!-- more -->



## 安装JWT相关包

```sh
npm install jsonwebtoken express-jwt
```

- `jsonwebtoken`**用于生成JWT字符串**
- `express-jwt`**用于将JWT字符串解析还原成JSON对象**

## 01：导包

**安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt**

```js
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");
```

> 注意：`express-jwt`跟进查看`index.d.ts`文件，看到导出的是一个变量，所以我们需要解构得到这个变量，否者会报错。
>
> ![image-20220830202131092](https://img-blog.csdnimg.cn/img_convert/4e464f8a548b7677a9220499903779dd.png)



## 02：定义 secret 密钥

**定义 secret 密钥，建议将密钥命名为 secretKey**

```js
//简易随机生成
const secretKey = 'hello'
```



## 03：调用 jwt.sign() 方法生成 JWT 字符串

**在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端**

```js
// 参数1：用户的信息对象
  // 参数2：加密的秘钥
  // 参数3：配置对象，可以配置当前 token 的有效期
  // 记住：千万不要把密码加密到 token 字符中
//定义登录接口
//post '/api/login' 用于用户登录，判断用户登录信息是否正确，正确给用户发送一个token字符串
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
  res.send({
    status: 200,
    message: '登录成功！',
    token: tokenStr, // 要发送给客户端的 token 字符串
  })
```

- **用户接收**
  - ![01](https://img-blog.csdnimg.cn/img_convert/8964196a750c1534ccb5bbfc67a0f726.jpeg)



​	

## 04：JWT字符串解析

**注册将 JWT 字符串解析还原成 JSON 对象的中间件**

- **中间件，应放在路有前**

```js
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 `req.user` 属性上
app.use(
  expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//],
  })
);
```

- **将解析完成后的信息挂在到`req.user`**

  - `req.user`输出

  - ```js
    { username: 'admin', iat: 1650168623, exp: 1650168653 }
    ```

    

  

## 05：将字符串返回给用户

**使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端**

```js
//创建一个get '/admin/getinfo' 有权限的 API 接口
res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user, // 要发送给客户端的用户信息
  })
```

- **请求需要添加请求头Headers**

  - ```js
    key为`Authorization`
    ```

  - ```js
    //value是 Bearer +空格+token
    //通常将用户的token存放在localStorage和sessionStorage中
    value为`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjUwMTY4NjIzLCJleHAiOjE2NTAxNjg2NTN9.K9qHxtvjNYZSYY_4mb3j4l-F_WezGAscwrhUAwsVFgQ`
    ```

  - 

- **用户接收**-**成功**

  - ![02](https://img-blog.csdnimg.cn/img_convert/74c6d62e84220d5fdf41a11bfe2504c0.jpeg)

## 06：创建处理错误中间件

**使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误**

- **当用户的token错误时**
  - ![03](https://img-blog.csdnimg.cn/img_convert/8126af8c45e9d22677498c5354335e26.jpeg)
  - **会返回一个错误**
  - **此时需要添加一个全局的错误处理中间件**
  - **判断`err.name`是否为`UnauthorizedError`**
  - **如果等于就返回无效的token**
  - **如果不等于就返回未知的错误**
  - 

```js
app.use((err, req, res, next) => {
  // 这次错误是由 token 解析失败导致的
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token',
    })
  }
  res.send({
    status: 500,
    message: '未知的错误',
  })
})
```

- - ![04](https://img-blog.csdnimg.cn/img_convert/ae3575c9333c42bc2195be0be04a97bc.jpeg)	

## 演示代码

```js
// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();

// TODO_01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");

// 允许跨域资源共享
const cors = require("cors");
app.use(cors());

// 解析 post 表单数据的中间件
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// TODO_02：定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = "itheima No1 ^_^";

// TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(
  expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//],
  })
);

// 登录接口
app.post("/api/login", function (req, res) {
  // 将 req.body 请求体中的数据，转存为 userinfo 常量
  const userinfo = req.body;
  // 登录失败
  if (userinfo.username !== "admin" || userinfo.password !== "000000") {
    return res.send({
      status: 400,
      message: "登录失败！",
    });
  }
  // 登录成功
  // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
  // 参数1：用户的信息对象
  // 参数2：加密的秘钥
  // 参数3：配置对象，可以配置当前 token 的有效期
  // 记住：千万不要把密码加密到 token 字符中
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, {
    expiresIn: "30s",
  });
  res.send({
    status: 200,
    message: "登录成功！",
    token: tokenStr, // 要发送给客户端的 token 字符串
  });
});

// 这是一个有权限的 API 接口
app.get("/admin/getinfo", function (req, res) {
  // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  console.log(req.user);
  res.send({
    status: 200,
    message: "获取用户信息成功！",
    data: req.user, // 要发送给客户端的用户信息
  });
});

// TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next) => {
  // 这次错误是由 token 解析失败导致的
  if (err.name === "UnauthorizedError") {
    return res.send({
      status: 401,
      message: "无效的token",
    });
  }
  res.send({
    status: 500,
    message: "未知的错误",
  });
});

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8888, function () {
  console.log("Express server running at http://127.0.0.1:8888");
});

```

