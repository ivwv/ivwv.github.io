---
title: 使用Node - axios+cheerio 批量爬取某网站 Gif动图
description: 使用Node - axios+cheerio 批量爬取某网站 Gif动图
isOriginal: true
icon: nodeJS
# YYYY-MM-DD
date: 2022-09-01
# 分类
category:
  - 我的项目整合
  - 案例
  - Demo
  - Node

# 标签
tag:
  - node
  - demo
  - cheerio
  - axios
  - project
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


> 批量爬取某网站 Gif动图


<!-- more -->




```sh
git clone https://github.com/ivwv/spider-get-gif.git
# or
# git clone https://gitee.com/isyv/spider-get-gif.git
```

**使用**

> 修改 `app.js`内 `GetGif`参数
>
> - 参数为 `from`， `to`
> - `from`表示开始页数
> - `to`表示结束页数
> - 每一页有38张动图

```js
const GetGif = require("./GetGif.js");
(async () => {
  const getGif = new GetGif(1, 300);
})();
```

```sh
npm i
mkdir imgs
node app.js
```

> **注意**
>
> 下载时会由于网络请求太多会报错
>
> 如下图：
>
> - 当295页下载完毕，然后报错了
> - 接下来就修改 `app.js` 从295+2的位置 297 开始
> - 避免下载296页时因为文件名冲突报错

![](https://github.com/ivwv/spider-get-gif/raw/main/mdimg/err.jpg)

**最终效果**

![](https://github.com/ivwv/spider-get-gif/raw/main/mdimg/show1.jpg)

---

![](https://github.com/ivwv/spider-get-gif/raw/main/mdimg/show2.jpg)

