---
title: 如何使用js将表单选中的文件转化为Base64编码格式
description: 如何使用js将表单选中的文件转化为Base64编码格式  使用`Promise`封装一个一个方法，将`File` 对象转化为`Base64`编码格式。
isOriginal: true
icon: vue
date: 2022-08-10
category:
  - 技术文章
  - JavaScript
  - Base64
tag:
  - javascript
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


> 使用`Promise`封装一个一个方法，将`File` 对象转化为`Base64`编码格式。


<!-- more -->



```js
const fileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        }
      });
    }
```



> 使用

```html
<input type="file" multiple id="input">
```

```js {7}
const selectedFile = document.getElementById('input');
    selectedFile.addEventListener("change", async function () {
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i];
        // console.log(fileList);
        // 将文件转换为base64格式
        const base64 = await fileToBase64(file);
        console.log(base64);
      }
    });
```



![file](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/%E6%A1%8C%E9%9D%A2/2022-08-10-13:08:24*file*4.gif)