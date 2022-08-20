---
title: process.env环境变量配置
description: process.env环境变量配置  Node 环境变量配置
isOriginal: true
icon: nodeJS
date: 2022-07-30
category:
  - 我的学习笔记
  - Node
tag:
  - process.env

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
Node 环境变量配置
:::
<!-- more -->


### Windows 系统

Windows 系统下，最常用的命令行面板就是 `CMD`（Command的简写） 和 `Powershell`。它们的操作分别如下：



#### CMD (Command 或 命令提示符)

```
# 查看所有环境变量
set

# 查看单个环境变量（以 NODE_ENV 为例）
set NODE_ENV

# 设置单个环境变量（以 NODE_ENV 为例）
set NODE_ENV=production

# 删除单个环境变量（以 NODE_ENV 为例）
set NODE_ENV=
```

上面的命令行以 `NODE_ENV` 变量为例，在 CMD 命令面板的操作中，如果 `NODE_ENV` 没有设置，则通过 `set NODE_ENV` 命令查看时，会提示 `环境变量 NODE_ENV 没有定义`。

当设置完 `NODE_ENV`（假设设置值为 `production`），再通过 `set NODE_ENV` 命令查看时，会返回 `NODE_ENV=production`。

```shell
set DUCK_DUCK_GO_SEARCH=哈哈 && node duck_duck_go.js  
```



#### Powershell

```
# 查看所有环境变量
ls env:

# 查看单个环境变量（以 NODE_ENV 为例）
$env:NODE_ENV

# 设置单个环境变量（以 NODE_ENV 为例）
$env:NODE_ENV="production"

# 删除单个环境变量（以 NODE_ENV 为例）
del env:NODE_ENV
```

上面的命令行以 `NODE_ENV` 变量为例，在 Powershell 命令面板的操作中，若 `NODE_ENV` 没有设置，则通过 `set NODE_ENV` 命令查看它时，没有任何提示。

当设置完 `NODE_ENV`（假设设置值为 `production`），再通过 `set NODE_ENV` 命令查看它时，会返回 `production`。

**注意点**

上面的环境设置只是临时的，即只针对当前运行窗口的环境有效。当CLI运行窗口关闭以后，相关设置都会丢失。

另外，虽然通过 CMD 和 Powershell 都能修改环境变量，但它们之间设置的环境变量并不会相互影响，即你在 CMD 可以设置 `NODE_ENV` 为 `production`，同时也可以在 Powershell 中设置 `NODE_ENV` 为 `development`，这也印证了上面的描述，设置只针对当前运行窗口有效 。

如果你希望设置一直生效（即 本地设置），可通过 `控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量` 这样进行设置（Windows10、可能需要重启）。

### Mac 系统

相当于 Windows 系统，Mac 系统上的操作就轻松了不少。因为它只集成一种命令行终端，它设置 Nodejs 环境变量的语法如下：

```
# 查看所有环境变量
env

# 查看单个环境变量（以 NODE_ENV 为例）
echo $NODE_ENV

# 设置单个环境变量（以 NODE_ENV 为例）
export NODE_ENV=production

# 删除单个环境变量（以 NODE_ENV 为例）
unset NODE_ENV
```

在配置完 Nodejs 环境变量后，你就可以继续运行项目中的打包命令了。

### Git

Git(Bash)是一款跨平台的命令行终端，我们也可以用它来设置 Nodejs 环境变量，语法如下：

```
# 查看所有环境变量
env

# 查看单个环境变量（以 NODE_ENV 为例）
echo $NODE_ENV

# 设置单个环境变量（以 NODE_ENV 为例）
export NODE_ENV=production

# 删除单个环境变量（以 NODE_ENV 为例）
unset NODE_ENV
```

上面的命令行以 `NODE_ENV` 变量为例，在 Git 命令行操作中，若 `NODE_ENV` 没有设置，则通过 `echo $NODE_ENV` 命令查看它时，没有任何提示。

当设置完 `NODE_ENV`（假设设置值为 `production`），再通过 `set NODE_ENV` 命令查看它时，会返回 `production`。

*需要说明的是，在 Mac 系统下，Git安装后，是集成在系统自带的命令行终端中。*

但是，采用 命令行（CLI）设置 的方式来修改 Nodejs 环境变量有一个不好地方。即每次在运行打包命令前，都要先通过 `set NODE_ENV=xx` 或者 `export NODE_ENV=xx` 等类似的命令来设置或者切换环境变量（这里指的是重开了命令窗口，或者切换打包环境的情况下），是否觉得这样麻烦？

幸好，我们还有第二种做法，即 配置 package.json。

## 配置 package.json

在项目配置文件 package.json 中，根据不同的打包命令去设置相应的 Nodejs 环境变量，是一种非常主流的做法。其实本质上来说，只是将在命令行面板设置环境变量的命令语句放到了 `package.json` 文件中，把 设置环境变量 和 打包 两个命令合并运行而已。

这种方式，就是将 `NODE_ENV` 注入到 `process.env` 对象。不同环境下，设置如下：

### Windows 系统

在这种方式下，无论你是使用 CMD (命令提示符) 还是 Powershell 命令行工具，你都可以在 `package.json` 这样配置：

```
// package.json

{
  ...
  "scripts": {
    "build": "set NODE_ENV=production&& npm run clean && webpack",
    "clean": "rimraf ./build && mkdirp build",
  }
}
```

配置完后（`mkdirp` 是一个生成文件夹的第三方包），你只需要在命令行面板运行 `npm run build` 即可完成打包。

**注意点**

在 Windows 系统中，你必须移除环境变量命令与 `&&` 符号之间的空白。否者，配置的命令不能生效！

### Mac 系统

```
// package.json

{
  ...
  "scripts": {
    "build": "export NODE_ENV=production && npm run clean && webpack",
    "clean": "rimraf ./build && mkdirp build",
  }
}
```

从上面描述可以看到，不论是不同的操作系统，还是不同的命令行终端，虽然目的都是设置 Nodejs 环境变量，但它们的语法都不尽相同。这就带来两个问题：

- 在 Windows 开发部署的项目，可能在 Mac 系统无法正常打包
- 在跨平台开发的项目上，你还得记住每个命令行终端所使用的语法，也麻烦

为了解决这一问题，有人开发了 `cross-env`。

### 跨平台 - cross-env

[cross-env](https://www.npmjs.com/package/cross-env) 是一个跨平台设置环境变量的第三方包，它可以让你只配置一行命令，就能轻松地在多个平台设置环境变量。

首先，你只需要安装它（由于多个项目在用，所以就全局安装了）：

```
npm install -g cross-env
```

然后，在 `package.json` 文件中进行设置：

```
// package.json

{
  ...
  "scripts": {
    "build": "npm run clean && cross-env NODE_ENV=production webpack",
    "clean": "rimraf ./build && mkdirp build",
  }
}
```

这样，不管你的电脑是 Windows 系统还是 Mac 系统 ，不管你用的 Powershell 还是 Git，你都可以正常设置 Nodejs 环境变量了。

注意，`cross-env NODE_ENV=production && npm run clean && webpack` 此类的设置不能使环境变量生效。原因是 `&&` 符号把命令语句分离成了多个，每一个命令执行的环境都是隔离的，而 `cross-env` 无法作用于其他环境的命令。