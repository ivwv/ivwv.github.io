---
icon: edit
date: 2022-07-30
category:
  - javascript
tag:
  - es6
  - 面向对象
  - 原型链
  - defineProperty
---

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