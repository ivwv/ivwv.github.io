---
title: 如何将命令行参数传递给 Node.js 应用程序？
description: 如何将命令行参数传递给 Node.js 应用程序？   与可以使用语法将参数传递给脚本的 `Bash` 脚本类似，您也可以将参数`$1`传递给 `Node.js` 应用程序。
isOriginal: true
icon: Nodejs
date: 2022-08-07
category:
  - 技术文章
  - Node
tag:
  - process

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


> 与可以使用语法将参数传递给脚本的 `Bash` 脚本类似，您也可以将参数`$1`传递给 `Node.js` 应用程序。


<!-- more -->


### 介绍



在本快速教程中，您将学习如何使用[`process.argv`数组](https://nodejs.org/docs/latest/api/process.html#process_process_argv)将参数传递给 `Node.js` 应用程序。

### 条件

在开始之前，您需要安装 `Node.js`：

- [下载 Node.js](https://nodejs.org/en/download/)

### 将参数传递给 `Node.js` 应用程序

让我们首先创建一个名为的新文件`script.js`并向其中添加以下代码：

```
const process = require('process');

console.log(process.argv[2]);
```

`process.argv`数组的快速概述：

- `process.argv[0]`是 `Node.js` 可执行文件的路径
- `process.argv[1]`是脚本文件的路径
- `process.argv[2]`是传递给脚本的第一个参数
- `process.argv[3]`是传递给脚本的第二个参数，依此类推

让我们使用以下命令运行脚本：

```sh
node script.js ivwv

# 输出:
ivwv
```

#### 打印所有参数

要打印所有参数，您可以像使用`forEach`标准数组一样使用循环：

```js
const process = require('process');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

让我们使用以下命令运行脚本：

```sh
node script.js hi there devs
```

我们现在将 3 个参数传递给脚本，在这种情况下，该脚本的输出将是：

```sh
0: /opt/homebrew/Cellar/node@16/16.16.0/bin/node
1: /Users/bobby/dev/script.js
2: hi
3: there
4: devs
```