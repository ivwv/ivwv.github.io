---
title: ES6在前端的模块导入与导出
icon: javascript
description: ES6在前端的模块导入与导出  es6模块化导入与导出自己的整理
isOriginal: true
date: 2022-07-30
category:
  - 我的学习笔记
  - JavaScript
tag:
  - es6
  - module
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
es6模块化导入与导出自己的整理
:::
<!-- more -->


#### `html`文件使用



##### 方法一

- `script`标签要使用`type`属性声明`module`
- 如果`script`标签有`src`属性,则标签内不可书写任何`js`代码

```html
<script type="module" src="./index.js"> </script>
```

##### 方法二

- `from`路径需要使用`/`  ,  `./`  或  `../`拼接的路径
  - ![image-20220722200008169](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/typora-user-images/2022-07-22-20:00:08*image-20220722200008169*b.png)
- 路径要写全，`.js`后缀要跟上
  - ![image-20220722200038659](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/typora-user-images/2022-07-22-20:00:38*image-20220722200038659*6.png)

```html
<script type="module">
    import Student from "./Student.js";
    import Teacher from "./Teacher.js";
    const student = new Student();
    const teacher = new Teacher();
    student.who();
    student.student();

    teacher.who();
    teacher.teacher();

  </script>
```



##### 两种方法答应输出

![image-20220722200054843](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/typora-user-images/2022-07-22-20:00:54*image-20220722200054843*2.png)

#### `js`文件

##### `Person.js`类

```js
class Person {
  who() {
    console.log("I am a person");
  }
  person() {
    console.log("I am a person");
  }
}
export default Person;
```

##### `Student.js`类

```js
import Person from "./Person.js";

export default class Student extends Person {
  who() {
    console.log("I am a student");
  }
  student() {
    console.log("I am a student");
  }
}
//或直接：
//export default Student;

```

##### `Teacher.js`类

```js
import Person from "./Person.js";

export default class Teacher extends Person {
  who() {
    console.log("I am a Teacher");
  }
  teacher() {
    console.log("I am a Teacher");
  }
}
//或直接：
//export default Teacher;

```

##### 或直接导出实例化对象

```js
import Person from "./Person.js";

class Student extends Person {
  who() {
    console.log("I am a student");
  }
  student() {
    console.log("I am a student");
  }
}
export default new Student();
```

```html
<script type="module">
    import student from './Student.js'
    student.who()
    student.student()

  </script>
```

##### 运行结果

![image-20220722220413190](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/typora-user-images/2022-07-22-22:04:13*image-20220722220413190*7.png)