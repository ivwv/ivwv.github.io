---
title: PicGo+Typora 配合 Github 搭建个人图床
description: PicGo+Typora 配合 Github 搭建个人图床
isOriginal: true
icon: pic
# YYYY-MM-DD
date: 2022-08-05
# 分类
category:
  - 实用分享
  - 图床
  - Picgo
  - GitHub
# 标签
tag:
  - 图床
  - typora
  - picgo

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



> 图床是什么?
>
> 你在网页上看到的所有图片，都是有链接的，可以供所有人访问。
>
> 当我们在使用`Typora`做笔记时，可能想要分享给自己的同事，但是笔记的图片是保存在自己的本地的，那么就需要同时把图片也一起打包发送。
>
> 那如果我们把笔记内要使用的图片放在公网上呢?


<!-- more -->


## 1.准备

- `GitHub`账号一枚，[自行注册](https://github.com/)
- [`PicGo`软件](https://github.com/Molunerfinn/PicGo/releases/tag/v2.3.0)下载并安装   ([`Windows`版下载](https://github.com/Molunerfinn/PicGo/releases/download/v2.3.0/PicGo-Setup-2.3.0-x64.exe)[`Mac`版下载](https://github.com/Molunerfinn/PicGo/releases/download/v2.3.0/PicGo-2.3.0.dmg)) 
- `PicGo`安装完毕后运行并不会打开窗口，会在任务栏静默运行

## 2.申请`GitHub Personal access token`

> 可点击链接直接跳转到创建界面
>
> [`GitHub`](https://github.com/) -> [`Settings` ](https://github.com/settings/profile)-> [`Developer settings`](https://github.com/settings/apps) -> [`Personal access token`](https://github.com/settings/tokens) -> [`Generate new token`](https://github.com/settings/tokens/new)

![image-20220805220429537](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-05-22:04:29*image-20220805220429537*a.png)

---

**底部点击生成**

![image-20220805220449090](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-05-22:04:49*image-20220805220449090*6.png)

> 保存好`token`只会显示一次，页面刷新没复制得重新申请

![image-20220805220644937](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-05-22:06:45*image-20220805220644937*6.png)



## 3.创建`GitHub`仓库

- 右上角加号
- New repository
- 填写仓库名
- 默认仓库为`public`
- 创建仓库

![hdjkhawkjdhjn](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/%E6%A1%8C%E9%9D%A2/2022-08-08-10:55:00*hdjkhawkjdhjn*b.png)

> 这里我创建的仓库名为 `ivwv/PicGoImgs`

![image-20220805221734928](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-05-22:17:35*image-20220805221734928*2.png)

## 4.配置PicGo

> 打开`PicGo`

![image-20220805220823912](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-05-22:08:24*image-20220805220823912*f.png)

> 右侧图床设置点击`GitHub`图床

![image-20220805221916439](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-05-22:19:16*image-20220805221916439*8.png)

> 填写相关信息

- 仓库名是你的:  用户名/仓库名
- 分支一般为main
- Token为刚刚申请的
- 仓储路径需要在后面加 `/`否者后面上传的文件名会有问题
- 自定义域名
  - 如果不设置这个，PicGo会默认返回`https://raw.githubusercontent.com/`的链接地址，对国内用户不是很友好
  - 设置`jsdelivr`加速格式:`https://cdn.jsdelivr.net/gh/用户名/仓库名@main`，这个是固定的，详情请看我的设置
- 最后点击确定和设为默认图床

![image-20220805222752062](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-05-22:27:52*image-20220805222752062*2.png)

> 演示:arrow_down:

![picgo-demo](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/picgo-demo.gif)



## 5.配合`Typora`

> Typora 现在需要付费，提倡使用正版
>
> 当然我也会提供破解版下载链接:smirk: :arrow_right: [点击下载](https://lc-gluttony.s3.amazonaws.com/LfQUMiHwWA4l/a5ryYkM9D3e9mF8FrsN66S9YzXEC5vXX/Typora1.3.6.zip)
>
> 破解版是我在b站up度盘里面的，我用着没问题

安装完毕后打开软件

> 点击右上角 文件 -> 偏好设置 -> 图像

- 插入图片时选择上传图片
- 上传服务选择`PicGo(App)`
- `PicGo`路径为你`PicGo`的安装路径
- 然后就可以点击验证图片上传，如果提示成功，则说明你的`Typora`已经可以使用`GitHub`图床了

![image-20220805230255027](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/image-20220805230255027.png)

---

**当然还有最重要的一步**

- 将`PicGo`的服务端打开，`Typora`是调用`PicGo`的接口让其上传
- 服务端设置保持默认即可

![server-open](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/server-open.gif)



**然后就可以点击验证图片上传选项**

![testupload](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/testupload.gif)



## 结束

:star2:到此为止，以后你的笔记就可以直接分享给你的小伙伴了:sparkles::sparkling_heart::star2:

