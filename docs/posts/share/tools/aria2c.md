---
title: aria2c 轻量终端下载神器
description: aria2c 轻量终端下载神器 支持多线程、断点续传、分块下载、支持 HTTP/HTTPS/FTP/BT/磁力链/磁盘缓存等
isOriginal: false
icon: markdown
date: 2022-09-06
category:
  - 实用分享
  - Tools
tag:
  - aria2c
  - tools

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


> 支持多线程、断点续传、分块下载、支持 HTTP/HTTPS/FTP/BT/磁力链/磁盘缓存等


<!-- more -->



## 下载

[GithHub下载地址](https://github.com/aria2/aria2/releases/tag/release-1.36.0)



> 下载完毕后解压，可以将解压目录添加到环境变量中,共全局使用`aria2c`命令



![image-20220906105506893](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/typora-user-images/2022-09-06-10:55:08*image-20220906105506893*4.png)



## 简单命令

- -i  指定url地址  可是多条  用换行分割开来
- -d  指定保存的目录
- -l  指定输出的日志
- -j  线程数 默认5
- -x  每次下载到一台服务器的最大连接数。默认：`1` 最大 ：16



> [更多选项](https://aria2.github.io/manual/en/html/aria2c.html#options)

## 使用

**简单使用**

```sh
# aria2c [url]
aria2c http://tva3.sinaimg.cn/bmiddle/ceeb653ely8h3bx5mmsglg203c03cdg9.gif
```

**加载txt文本里面的url以及选项下载**

- 创建`url-option.txt` 文件,粘贴下面内容

  - ```
    https://images.pexels.com/photos/12027232/pexels-photo-12027232.jpeg 
        out=1.jpeg
        dir=img/img1
    https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg 
        out=2.jpeg
        dir=img/img2
    https://images.pexels.com/photos/1843717/pexels-photo-1843717.jpeg 
        out=3.jpeg
        dir=img/img3
    https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg 
        out=4.jpeg
        dir=img/img4
    https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg 
        out=5.jpeg
        dir=img/img5
    ```

  - 加载文本使用 `-i` 选项，每一行写入一条`url`地址

  - 可以针对于每一条`url`添加选项,在`url`地址后换行，每一个命名前使用一个或多个`tab`、空格，命令使用[单词形式](https://aria2.github.io/manual/en/html/aria2c.html#id2)添加，按照`key=value`的形式一行一个命令

- **下载**

  - ```sh
    aria2c -i .\url-option.txt -d .\img\ -l .\log.log -x 16 -s 5 -j 5
    ```

  - ![image-20220906111615414](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/typora-user-images/2022-09-06-11:16:17*image-20220906111615414*8.png)

> 当我们进行爬虫操作的时候 ，就可以 将要下载的`url`和要输出的文件名和输出路径批量按格式写入txt文件，再使用 `aria2c` 进行多线程下载，能省很多时间，并且下载更加快速