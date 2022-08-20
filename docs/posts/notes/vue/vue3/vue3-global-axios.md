---
title: vue3全局挂载axios
description: vue3全局挂载axios  如何在vue3项目中全局配置axios
isOriginal: true
icon: vue
date: 2022-08-06
category:
  - 我的学习笔记
  - Vue3
  - Axios
tag:
  - vue
  - axios
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


> 如何在vue3项目中全局配置axios

<!-- more -->



## 配置

> `main.js`

```sh
npm i axios
```

1. 导入`axiso`
2. 为`axios`配置请求的根路径
   - `axios.defaults.baseURL = 'https://api.server.com'`
3. 将`axios`挂载为`app`的全局自定义属性之后，每个组件可以通过`this`直接访问到全局挂载的自定义属性
4. 自定义属性名可自定义，不冲突即可，这里挂载的是`$http`自定义属性名

**代码:arrow_down:**

```js {4,8-9}
import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.mount('#app')
```

## 使用

> 组件以及子组件内无需导入`axios`

1. 使用可以通过`this.$http`使用，如下代码:arrow_down:

```js {6}
<script>
export default {
  name: 'Post',
  methods: {
    async postInfo() {
      const { data: res } = await this.$http.post('/api/post', { name: 'zs', age: 20 })
      console.log(res)
    },
  },
}
</script>
```

