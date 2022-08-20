---
title: ES6中数组过滤的四种方法
description: ES6中数组过滤的四种方法  `forEach` `some` `every` `reduce` 数组过滤的四种方法
isOriginal: true
icon: Nodejs
date: 2022-08-07
category:
  - 我的学习笔记
  - JavaScript
tag:
  - es6
  - filter

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


> `forEach` `some` `every` `reduce` 数组过滤的四种方法


<!-- more -->




## forEach

> forEach循环一旦被执行，会从头执行到尾，不会中间被停止
>
> 容易浪费性能

```js
<script>
const arr = ['小红', '小明', '小白', '小黑'];
        arr.forEach((item, index) => {
            console.log('ok');
            if (item === "小明") {
                console.log(index);
                return;
            }
        })
 </script>
```

![04](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*04*8.jpg)



```js
<script>
        const arr = ['小红', '小明', '小白', '小黑', '小白'];
        const newArr = [];
        arr.forEach((item, index) => {
            console.log('ok');
            if (item === "小白") {
                console.log(index);
                newArr.push(item);
                return;
            }
        })
        console.log(newArr);
    </script>
```

![05](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*05*8.jpg)

> forEach 会将数组内的所有项都扫描一遍

```js
//数组对象
<script>
        // const arr = ['小红', '小明', '小白', '小黑', '小白'];
        const obj = [{
            name: '小红',
            age: 18
        }, {
            name: '小明',
            age: 20
        }, {
            name: '小白',
            age: 16
        }, {
            name: '小黑',
            age: 17
        }, {
            name: '小白',
            age: 18
        }]
        const newArr = [];
        obj.forEach((item, index) => {
            console.log('ok');
            if (item.name === "小白") {
                console.log(index);
                newArr.push(item);
                return;
            }
        })
        console.log(newArr);
    </script>
```

![06](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*06*7.jpg)

## some

> 在找到对应的项之后，可以通过return true 固定的语法来终止循环
>
> 应用场景：只需要在数组中找到一项自己需要的元素就可以用some

```js
const arr = ['小红', '小明', '小白', '小黑', '小白'];
arr.some((item, index) => {
            console.log('ok');
            if (item === '小白') {
                console.log(index);
                //在找到对应的项之后，可以通过return true 固定的语法来终止循环
				//满足自己的需求后，找到了自己想要的那一项，就可以退出循环
                return true
            }
        })
```

![07](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*07*d.jpg)

## every

> every返回一个布尔值
>
> 只要每一项都满足判断条件就返回true
>
> 只要有一项不满足就返回false
>
> 会将数组的每一项都扫描一遍

```js
const obj = [
    {id: 1,name: '小红',age: 18,state: true}, 
    {id: 2,name: '小明',age: 20,state: true}, 
    {id: 3, name: '小白',age: 18,state: true}, 
    {id: 4,name: '小黑',age: 18,state: true}, 
    {id: 5,name: '小白',age: 18,state: true}
]
const result = obj.every(item => item.state)
//以下两种写法都一样
//const result = obj.every(item => item.state === true)
/*
const result = obj.every(item => {
            if (item.state === true) {
                newArr.push(item);
                return true;
            }
        })
*/
console.log(result); //true

```

## reduce

> 把每一项都累加起来

**reduce伪代码**

```js
arr.filter(item => item.state).reduce((累加的结果,当前循环项) => { }, 初始值)
1.第一项的结果等于初始值
```



```js
const arr = [
    {
            id: 1, name: '西瓜', state: true, price: 10, count: 1
        }, {
            id: 2, name: '苹果', state: false, price: 80, count: 2
        }, {
            id: 3, name: '香蕉', state: true, price: 20, count: 3
        }]
//需求:把购物车数组中，已勾选的水果，总价累加起来
//普通方法，使用filter+forEach
let amt = 0; //总价
arr.filter(item => item.state).forEach(item => {
    amt += item.price * item.count
})
console.log(amt); //70
```

```js
//高级方法，使用filter+reduce
const arr = [{
            id: 1, name: '西瓜', state: true, price: 1, count: 1
        }, {
            id: 2, name: '苹果', state: true, price: 2, count: 2
        }, {
            id: 3, name: '香蕉', state: true, price: 3, count: 3
        }, {
            id: 4, name: '葡萄', state: true, price: 4, count: 4
        }, {
            id: 5, name: '荔枝', state: true, price: 5, count: 5
        }]
        //把购物车数组中，已勾选的水果，总价累加起来
        // arr.filter(item => item.state).reduce((累加的结果,当前循环项) => { }, 初始值)
        //filter过滤state被选中的水果，再使用reduce累加
        const result = arr.filter(item => item.state).reduce((amt, item) => {
            console.log(amt);
            return amt += item.price * item.count
        }, 0)
        console.log('result', result);
```

![08](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*08*d.jpg)



**reduce 简写方法**

```js
const result = arr.filter(item => item.state).reduce((amt, item) => amt += item.price * item.count, 0)
```

