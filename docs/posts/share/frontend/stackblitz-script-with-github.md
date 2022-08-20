---
title: stackblitz 在线编辑器实用技巧
description: stackblitz 在线编辑器实用技巧 可以直接在线编辑器中运行 GitHub 前端项目 自动安装npm包 自动运行
# 是否为原创
isOriginal: true
icon: direction
date: 2022-08-20
category:
  - 实用分享
  - FrontEnd
tag:
  - dev
  - website
  - stackblitz

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


> stackblitz 在线编辑器实用技巧 可以直接在线编辑器中运行 GitHub 前端项目 自动安装npm包 自动运行

<!-- more -->



[stackblitz](https://stackblitz.com/)是一个前端在线编辑器，里面包含了很多模板，包含：Vue、React、TypeSctipt、Next.js、Nuxt.js、Angular、JavaScript等前端框架模板，也包含了

Express、json-server、Koa、Egg.js等后端模板

选择模板后就是这个界面:arrow_down:

![image-20220820144423484](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/typora-user-images/2022-08-20-14:44:28*image-20220820144423484*1.png)

但是，今天我突然发现，[stackblitz](https://stackblitz.com/)可以自己下载`GitHub`上的仓库，并且自动安装npm包

![image-20220820144620591](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/typora-user-images/2022-08-20-14:46:24*image-20220820144620591*f.png)

当我们找到一个项目时，我们就可以通过这个网站运行，看到效果，就不用下载到本地了

> 使用时，只需要根据这个格式:`https://stackblitz.com/github/OWNER/REPO`的网址打开就可以了

也可以通过一行代码脚本点击后跳转

```js
window.location.href=`https://stackblitz.com/github/${window.location.href.split('/').slice(3,5).join('/')}`
```

我们可以将代码通过书签的方式运行

- 在代码前加上`javascript:`

```js
javascript:window.location.href=`https://stackblitz.com/github/${window.location.href.split('/').slice(3,5).join('/')}`
```

![stackblitz2](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/%E6%A1%8C%E9%9D%A2/2022-08-20-15:12:08*stackblitz2*d.gif)

---

![stackblitz](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/%E6%A1%8C%E9%9D%A2/2022-08-20-15:04:52*stackblitz*a.gif)

案例可以使用自己仓库的案例，也可以使用本篇文章使用到的仓库:arrow_down:

[socket.io在线多人聊天程序](https://github.com/ivwv/socket_io_chat)