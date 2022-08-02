---
title: 在Vuepress2中如何在md文件中添加自定义组件
icon: edit
date: 2022-08-02
category:
  - Vuepress
tag:
  - Markdown
  - components

# 是否置顶
sticky: false
# 是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前
star: false
# 是否将该文章添加至文章列表中。
article: true
# 是否将该文章添加至时间线中。
timeline: true
---
<!-- more -->

## 使用方法

```sh
npm i -D @vuepress/plugin-register-components
```

> 创建文件夹:`.vuepress/components`
>
> `.vuepress/config.ts`

```js
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
  }),
],
```

> 简单使用方法: 配置`componentsDir`后，会将`components`目录下的`.vue`主键自动注册
>
> [更多配置项](https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html)
