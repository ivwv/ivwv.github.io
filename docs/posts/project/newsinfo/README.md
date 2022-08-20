---
title: 新闻门户网站
description: 新闻门户网站   该项目是在大二期间，学校举办的技能节，参加了`web`项目。比赛内容是做出一个新闻门户网站，两人一组。犹豫队友平时比较忙，我就让他帮我找找素材啥的，然后让他做了一个`index.html`首页
isOriginal: true
icon: license
# YYYY-MM-DD
date: 2022-08-01
# 分类
category:
  - 我的项目整合
# 标签
tag:
  - bootstrap
  - node
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

::: tip 导读
该项目是在大二期间，学校举办的技能节，参加了`web`项目。比赛内容是做出一个新闻门户网站，两人一组。犹豫队友平时比较忙，我就让他帮我找找素材啥的，然后让他做了一个`index.html`首页
:::
<!-- more -->

> [项目展示](http://client--news.herokuapp.com/)
>
> [`Gitee`-后端](https://gitee.com/isyv/newsinfo_with_imgs)
>
> [`Gitee`-前端](https://gitee.com/isyv/newsclient)
>
> [后端接口](https://documenter.getpostman.com/view/19150006/UyxdKokK#afccd7cd-423e-4695-abb3-269d31cf1e62)

::: tip

该项目部署在`Heroku`国外免费容器平台，首次进入会有20秒左右的启动时间。

国外平台偶尔出现在国内打不开的情况。

:::

# 项目展示

## 首页

由于首页不是我做的，跟整体观感会有差距

![image-20220801162255125](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-01-16:22:55*image-20220801162255125*9.png)



## 登录注册

![image-20220801162831706](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-01-16:28:31*image-20220801162831706*7.png)

## 新闻详情页

- 当用户登录成功后，右上角的登录按钮会变成头像以及用户名
- 新闻的标题、分类、时间是使用`Ejs`模板引擎获取后端数据渲染
- 新闻内容可以通过标题下方的工具栏调节字体
- 右侧轮播图使用`Swiper`插件，并且图片和文字内容通过`axios`获取渲染
- 右侧轮播图和新闻排行展示顺序是根据页面浏览量动态展示
- 搜索功能

![image-20220801163217876](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-01-16:32:17*image-20220801163217876*3.png)



## 搜索功能

![image-20220801164545874](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-01-16:45:45*image-20220801164545874*f.png)

## 后台管理

**由于当时技术受限，并且没有了解到富文本插件，所以新闻上传使用较原始的input表单上传，**

### 后台首页

使用`Echart`通过接口数据简单的做了可视化

![image-20220801164852219](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-01-16:48:52*image-20220801164852219*9.png)



### 插入新闻

- 当图片选择好后，点击确定，会直接上传，并且拿到服务器端的图片地址

![image-20220801165124206](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-01-16:51:24*image-20220801165124206*b.png)

### 新闻列表

- 可以删除
- 查看新闻信息
- 图片预览是直接跳转到图片直链，也是由于当时不了解图片预览有啥插件
- 分页是直接前端发送请求携带页码，后端查询相关数据

![image-20220801165340766](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-01-16:53:40*image-20220801165340766*c.png)

### 用户管理

- 用户列表原理和新闻列表原理相同



![image-20220801165614717](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-01-16:56:14*image-20220801165614717*3.png)
