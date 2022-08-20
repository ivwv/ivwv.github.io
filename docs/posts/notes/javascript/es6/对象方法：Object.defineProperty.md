---
title: 对象方法：Object.defineProperty
description: 对象方法：Object.defineProperty  面向对象相关的笔记
# 是否为原创
isOriginal: true
icon: javascript
date: 2022-07-30
category:
  - 我的学习笔记
  - JavaScript
tag:
  - es6
  - 面向对象
  - 原型链
  - defineProperty
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
面向对象相关的笔记
:::
<!-- more -->
# 对象方法：Object.defineProperty

```js
Object.defineProperty(obj, prop, descriptor)
```

- `obj`：必需。目标对象 
- `prop`：必需。需定义或修改的属性的名字
- `descriptor`：必需。目标属性所拥有的特性

`Object.defineProperty()`  第三个参数 `descriptor `说明： 以对象形式 `{ } `书写

- `value`: 设置属性的值 默认为`undefined`

- `writable`: 值是否可以重写。`true `| `false `默认为`false`

- `enumerable`: 目标属性是否可以被枚举。`true `| `false `默认为`false`

- `configurable`: 目标属性是否可以被删除或是否可以再次修改特性 `true `| `false `默认为`false`