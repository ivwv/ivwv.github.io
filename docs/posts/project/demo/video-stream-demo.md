---
title: 基于Nodejs的视频流播放
description: 基于Nodejs的视频流播放
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


> 基于Nodejs的视频流播放,按需请求视频流片段，做到省流量，省带宽。

<!-- more -->




 **源码**

[`GitHub`](https://github.com/ivwv/video-stream-demo)

[`Gitee`](https://gitee.com/isyv/video-stream-demo)



```js
const express = require("express");
const app = express();
const fs = require("fs");
const { stat } = require("fs").promises;
const port = process.env.PORT || 3000;
const videoPath = "./video.mp4";
app.get("/", (req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.send(`<video src="/video"  width=800 controls></video>`);
});
app.get("/video", async (req, res) => {
  // console.log(req.headers);
  // 提取 headers 中的 range
  let range = req.headers.range;
  // console.log("range", range);
  if (range) {
    // 获取 文件相关信息，主要获取文件大小 stat.size()
    let stats = await stat(videoPath);
    // console.log("stats", stats);
    // 匹配 range 中的 `bytes=24281089-` 数值
    let r = range.match(/=(\d+)-(\d+)?/);
    // console.log("r", r);
    // 转化为 10 进制
    let start = parseInt(r[1], 10);
    // console.log("start", start);
    // 表示 切片大小 这里是 1M
    let end = start + 1024 * 1024;
    // console.log("end", end);
    // console.log("stats.size", stats.size);
    // 判断 end 是否超出文件大小
    if (end > stats.size - 1) end = stats.size - 1;

    // 设置 headers 重要
    let head = {
      // 设置 content-type
      "Content-Type": "video/mp4",
      // 设置切片范围
      "Content-Range": `bytes ${start}-${end}/${stats.size}`,
      // 设置切片长度
      "Content-Length": end - start + 1,
      // 设置支持切片
      "Accept-Ranges": "bytes",
    };
    // HTTP 206 Partial Content 成功状态响应代码表示请求已成功，
    // 并且主体包含所请求的数据区间，该数据区间是在请求的 Range 首部指定的。
    res.writeHead(206, head);
    // 第二个参数设置切片范围
    fs.createReadStream(videoPath, { start, end }).pipe(res);
  } else {
    fs.createReadStream(videoPath).pipe(res);
  }
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

```

