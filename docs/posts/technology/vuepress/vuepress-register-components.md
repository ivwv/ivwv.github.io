---
title: Vuepress2中如何在md文件中添加自定义组件
description: Vuepress2中如何在md文件中添加自定义组件
isOriginal: true
icon: vue
date: 2022-08-02
category:
  - 技术文章
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
<CountView></CountView>


<!-- more -->

## 使用方法

```sh
npm i -D @vuepress/plugin-register-components
```

> 创建文件夹:`.vuepress/components`
>
> `.vuepress/config.ts`

### 配置

```js
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
  }),
],
```

> 简单使用方法: 配置`componentsDir`后，会将`components`目录下的`.vue`主键自动注册，无需配置`name`,在`.md`文件中直接使用`.vue`文件名为标签即可
>
> [更多配置项](https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html)

### 使用

> 创建文件`/.vuepress/components/Demo.vue`
>
> 无需注册名称

```vue
<template>
  <div><h1>这是一个测试自定义组件的demo</h1></div>
</template>
<script>
export default {};
</script>
<style></style>
```

> 创建文章`docs/posts/测试文章.md`

```html
<Demo></Demo>
```

![image-20220802132522080](https://public-1310720021.cos.ap-shanghai.myqcloud.com/headimg/typora-user-images/2022-08-02-13:25:22*image-20220802132522080*c.png)
