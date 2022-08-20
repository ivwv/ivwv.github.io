---
title: Javascript面对对象编程
description: Javascript面对对象编程  面向对象相关的笔记
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



##### 使用整合

- 通过class 关键字创建类, 类名我们还是习惯性定义首字母大写
- 类里面有个constructor 函数,可以接受传递过来的参数,同时返回实例对象
- constructor 函数 只要 new 生成实例时,就会自动调用这个函数, 如果我们不写这个函数,类也会自动生成这个函数
- 生成实例 new 不能省略
- 最后注意语法规范, 创建类 类名后面不要加小括号,生成实例 类名后面加小括号, 构造函数不需要加function

```js
class Grand {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  // (1) 我们类里面所有的函数不需要写function
  // (2) 多个函数方法之间不需要添加逗号分隔
  add() {
    return `add:${this.a + this.b}`;
  }
}
class Father extends Grand {
  constructor(a, b) {
    // 利用super调用父类的构造函数
    // super 必须在子类this之前调用
    // 否则会报错:my-01.html:28 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(a, b);
    this.a = a;
    this.b = b;
  }
  // (1) 我们类里面所有的函数不需要写function
  // (2) 多个函数方法之间不需要添加逗号分隔
  sub() {
    return `sub:${this.a - this.b}`;
  }
  say() {
    return "我是爸爸";
  }
}
class Son extends Father {
  constructor(a, b) {
    // 需要在子类中调用 super(a,b)，才能调用父类的构造函数
    super(a, b); //调用了父类中的构造函数
    this.a = a;
    this.b = b;
  }

  // (1) 我们类里面所有的函数不需要写function
  // (2) 多个函数方法之间不需要添加逗号分隔
  mul() {
    return `mul:${this.a * this.b}`;
  }

  say() {
    // console.log('我是儿子');
    // 使用super调用父类的方法，可以不经过constructor 中的 super(a,b)
    // 只需要在子类中调用 super.方法 即可
    console.log(super.say() + "的儿子");
    // super.say() 就是调用父类中的普通函数 say()
  }
}
const son = new Son(1, 2);
console.log(son.add()); //add:3
console.log(son.sub()); //sub:-1
console.log(son.mul()); //mul:2
son.say(); //我是爸爸的儿子

```

**运行结果**

![image-20220719122351155](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/typora-user-images/2022-07-19-12:23:51*image-20220719122351155*a.png)



##### this指向问题

```html
 <script>
        // 1. 在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象
        // 2. 类里面的共有的属性和方法一定要加this使用.
        var that;
        var _that;
        class Star {
            constructor(uname, age) {
                // constructor 里面的this 指向的是 创建的实例对象
                that = this;
                console.log(this);

                this.uname = uname;
                this.age = age;
                // this.sing();
                this.btn = document.querySelector('button');
                // this.btn.onclick = this.sing;
                // 下面等同于上面的写法
                this.btn.addEventListener('click', this.sing);
            }
            sing() {
                // 这个sing方法里面的this 指向的是 btn 这个按钮,因为这个按钮调用了这个函数
                console.log(this);
                console.log(that.uname); // that里面存储的是constructor里面的this
            }
            dance() {
                // 这个dance里面的this 指向的是实例对象 ldh 因为ldh 调用了这个函数
                _that = this;
                console.log(this);
                console.log(_that);
                console.log(that);
                console.log('---');
                /**
                 * 无论哪种指向，只要跟当前构造函数有关系的 
                 * (被当前this所赋值，无论在哪儿赋值)，
                 * 都是指向的是ldh这个实例对象
                 * 所以在外部也等于new Star的那个变量
                */
                const retult = this === _that && this === that && _that === that
                console.log(`当前this,that,_that是否相同：` + retult);

            }
        }


        var ldh = new Star('刘德华');
        console.log(ldh);
        console.log(that === ldh);
        ldh.dance();
        console.log(_that === ldh);

    </script>
```

**运行结果**

![image-20220719124857522](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/typora-user-images/2022-07-19-12:48:57*image-20220719124857522*9.png)

**点击按钮**

![image-20220719124949852](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/typora-user-images/2022-07-19-12:49:49*image-20220719124949852*d.png)