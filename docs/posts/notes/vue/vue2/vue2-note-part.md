---
title: Vue2学习笔记
description: Vue2学习笔记  组件之间的数据共享、$refs引用DOM、动态组件、插槽、自定义指令
isOriginal: true
icon: Nodejs
date: 2022-08-07
category:
  - 我的学习笔记
  - Vue2
tag:
  - note

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


> 组件之间的数据共享、$refs引用DOM、动态组件、插槽、自定义指令


<!-- more -->



## 子向父传值

###  通过自定义事件

> 子组件

```js
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
      //测试方法
    add() {
      this.count++;
      //向父传值
      //修改数据时，通过$emit()触发自定义事件
      //1.$emit可以写入数字或者字符串
      this.$emit("numChange", this.count);
      //2.也可以传入多个数据,也可以传入对象
      // 后期ajax数据也可以传递
      //this.$emit("numChange", 1, 2, 3, 4, 5, {
      // name: "张三",
      //age: 18,
      //});
    },
  },
};
```

> 父组件

```js
//监听@numChange事件
//自定义事件跟vue规定的 @click="show" 原理一样
<Count @numChange="getCount"></Count>

export default {
  components: {
    Count,
  },
  data() {
    return {
      //创建对象数据，用于接收自定义事件赋值
      countFromSon: 0,
    };
  },
  methods: {
      //getCount 为使用组件时的方法名，携带一个参数
      //1.参数是子组件传递过来的数据
    getCount(val) {
        //将参数的值重新赋值给当前vue实例的对象
      this.countFromSon = val;
    },
      //2.也可以接收多个数据
      //getCount(a, b, c, d, e) {
      //	console.log(a, b, c, d, e);
      //},
  },
};

```





## 兄弟组件之间的数据共享

> **在`vue2.x`中，兄弟组件之间数据共享的方案是`EventBus`。**
>
> **`EventBus`的使用步骤**:arrow_down:

① 创建 `eventBus.js` 模块，并向外共享一个 `Vue `的实例对象
② 在数据发送方，调用 `bus.$emit('事件名称', 要发送的数据)` 方法触发自定义事件
③ 在数据接收方，调用 `bus.$on('事件名称', 事件处理函数)` 方法注册一个自定义事件

> `eventBus.js`

```js
import Vue from 'vue'; 
export default new Vue();
```

> 数据发送方

```js
//兄弟组件都需要引入eventBus.js
import bus from "./eventBus.js";
export default {
  data() {
    return {
      sendCount: 12,
      sendObj: {
        name: "xz",
        age: "18",
      },
    };
  },
  methods: {
    send() {
        //同样可以传入多个参数，只需要接收时使用
      bus.$emit("share", this.sendCount, this.sendObj);
    },
  },
};
```

> 数据接收方

```js
//兄弟组件都需要引入eventBus.js
import bus from "./eventBus.js";
export default {
  data() {
    return {
      count: 0,
      obj: {},
    };
  },
  methods: {
    getData() {
        //固定方案，使用箭头函数，以及兄弟之间传递 
      bus.$on("share", (count, obj) => {
        this.count = count;
        this.obj = obj;
      });
    },
  },
  created() {
      //created调用
    this.getData();
  },
};
```

## `$refs `引用`DOM`

```js
//组件内元素添加ref自定义属性
<h3 ref="myh1">Left 组件</h3>
//使用前要加this
console.log(this.$refs.myh1.innerText);
//注意 在created里面使用会报错（undefind）
// mounted 当页面元素加载完毕后即可调用$refs
```



### 使用`$refs` 引用组件实例

```js
//父组件
// 设置ref自定义属性
<Left ref="comLeft"></Left>
//父组件打印this
//如下图显示-在$refs 内出现了comLeft实例
```

![01](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*01*8.jpg)

> 展开后发现是子组件的实例，也可以看到子组件引用的`dom`元素

![02](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*02*c.jpg)

> **展开后有看到`send`方法**

![03](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*03*4.jpg)

> **父组件操作子组件方法**

```js
//父组件
<button @click="sendLeft">发送</button>

export default {
  methods: {
    logthis() {
      console.log(this);
    },
    //点击按钮执行Left组件中的send方法
    //也可也直接操作里面的数据
    sendLeft() {
      this.$refs.comLeft.send();
    },
  },
};
```

### 控制文本框和按钮的按需切换-案例

![togipt](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*togipt*3.gif)



>  **组件的 `$nextTick(cb)` 方法，会把 `cb` 回调推迟到下一个 `DOM `更新周期之后执行。通俗的理解是：等组件的`DOM `更新完成之后，再执行 `cb` 回调函数。从而能保证 `cb` 回调函数可以操作到最新的 DOM 元素。**

```js
//组件代码
<input type="text" v-if="inputVisible" @blur="showButton" ref="iptRef" />
<button v-else @click="showInput">展示输入框</button>
```

```js
export default {
  data() {
    return {
      inputVisible: false,
    };
  },
  methods: {
    showInput() {
      this.inputVisible = true;
      //$nextTick(cb)
      //当
      this.$nextTick(() => {
        this.$refs.iptRef.focus();
      });
    },
    showButton() {
      this.inputVisible = false;
    },
  },
};
```

## 动态组件

### 1.什么是动态组件

动态组件指的是动态切换组件的显示与隐藏。

### 2. 如何实现动态组件渲染

`vue `提供了一个内置的  组件，专门用来实现动态组件的渲染。

- `component `标签是`vue`内置的，作用：组件的占位符
- `is` 属性的值，表示要渲染的名字

```js
 <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- <Left></Left>
      <Right></Right> -->
//这样写会报错，写法写死了。不能动态修改
  <component is="Left"></component>
//根据data内有的属性动态绑定，is前需要加v-bind 或 :
//可以动态切换
  <component :is="comLeft"></component>
```

```js
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
  data() {
    return {
      comLeft: "Left",
      comRight: "Right",
    };
  },
  components: {
    Left,
    Right,
  },
};
```

### 案例

#### 1.点击按钮切换组件

![09](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*09*9.gif)

通过点击按钮，修改`comName`的属性值

```js
<button @click="comName = 'Left'">展示Left</button>
<button @click="comName = 'Right'">展示Right</button>
<div class="box">
      <component :is="comName"></component>
</div>

export default {
  data() {
    return {
      comName: "Left",
      // comLeft: "Left",
      // comRight: "Right",
    };
  },
  components: {
    Left,
    Right,
  },
};
```

#### 2.`Left`组件添加`+1`按钮，再来回切换组件

```js
//Left
<h3>Left 组件---{{ count }}</h3>
<button @click="count++">+1</button>

export default {
  data() {
    return {
      count: 0,
    };
  },
  destroyed() {
    console.log("Left 组件销毁");
  },
};
```

![10](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*10*3.gif)

> - **缺点，却换后 组件原来的内容会被销毁，相当于被刷新**
>
> - **重新切换会重新创建组件**
>
> - **被隐藏的组件会被销毁**
> - **解决办法？有！ 使用 `keep-alive `标签**

#### 解决办法

![11](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*11*9.gif)

**使用`<keep-alive>`标签将`<component>`标签包裹起来即可解决**

**使用后也并不会经过销毁**

**`keep-alive` 可以把内部的组件进行缓存，而不是销毁组件**

```js
App.vue
<keep-alive>
    <component :is="comName"></component>
</keep-alive>
```



#### 4. keep-alive 对应的生命周期函数

当组件被缓存时，会自动触发组件的 `deactivated `生命周期函数。
当组件被激活时，会自动触发组件的 `activated `生命周期函数。

![12](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*12*8.gif)



#### 5. `keep-alive` 的 `include` 属性

`include `属性用来指定：只有名称匹配的组件会被缓存。多个组件名之间使用英文的逗号分隔：

**只有在include属性内有的组件，才会被缓存，反之则不会进行缓存**

**注意：`include`属性值是我们 `components `注册组件时的名称**

![13](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*13*a.gif)

```js
<keep-alive include="Right">
    <component :is="comName"></component>
</keep-alive>
export default {
  data() {
    return {
      comName: "Left",
      // comLeft: "Left",
      // comRight: "Right",
    };
  },
  components: {
    Left,
    Right,
  },
};
```

如需多个进行缓存 只需通过英文逗号`,`进行分割

```js
<keep-alive include="Left,Right">
     <component :is="comName"></component>
</keep-alive>
```

#### 扩展

1.跟`include`相反的`exclude`

- 两个只能存在一个，只能使用一个
- `exclude`是排除不需要缓存的组件
- 两个互补使用

```js
<keep-alive exclude="Left">
        <component :is="comName"></component>
      </keep-alive>
```

2.当子组件提供了 `name `属性之后，组件的名称，就是 `name `属性的值

```js
Right组件
export default {
  //当子组件提供了 name 属性之后，组件的名称，就是 name 属性的值
  name: "MyRight",
};
```

![14](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*14*f.jpg)



## 插槽

### 1.什么是插槽

> 插槽（`slot`）是 `vue `为组件的封装者提供的能力。允许开发者在封装组件时，把不确定的、希望由用户指定的
> 部分定义为插槽。

![15](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*15*f.jpg)

可以把插槽认为是组件封装期间，为用户预留的内容的占位符。

### 2. 体验插槽的基础用法

> 在封装组件时，可以通过  元素定义插槽，从而为用户预留内容占位符。示例代码如下：

![16](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*16*f.jpg)



```html
!父组件
<Left>
        <!-- 默认情况下，在使用组建的时候，提供的内容都会被
         填充到名字为default的插槽中 -->
        <!-- 1.如果要把内容填充到指定名称的插槽中，需要使用v-slot：这个
         指令 -->
        <!-- 2.v-slot:后面要跟上插槽的 -->
        <!-- 3.v-slot：指令不能直接使用在元素身上,必须用在 template 标签上 -->
        <!-- 4.template 这个标签，她在一个虚拟的标签，只起到包裹性质的作用，但是，不会被渲染为
         任何实质性的 html元素 -->
        <!-- <template v-slot:default> -->
        <!-- `v-slot:` 等于 `#` -->
        <!--简写为 `#`  -->
        <template #default>
          <p>Left组件插槽内容</p>
        </template>
      </Left>


!子组件
<!-- 声明一个插槽区域 -->
    <!-- Vue官方规定：每一个 solt 插槽，都要有一个 name 名称 -->
    <!-- 如果省略了 solt 属性，则有一个默认名称叫做default -->
    <!-- <slot></slot> -->
<slot name="default">
      <!-- 以用户指定的为准 -->
    <p>这是 default 插槽的默认内容</p>
</slot>
```



### 具名插槽

如果在封装组件时需要预留多个插槽节点，则需要为每个  插槽指定具体的 `name `名称。这种带有具体
名称的插槽叫做“具名插槽”。

**注意：没有指定 `name `名称的插槽，会有隐含的名称叫做 `default`**

#### 为具名插槽提供内容

在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot `指令，并以 v-slot 的参数的形式提供其名称。示例代码如下：

跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (`v-slot:`) 替换为字符 `#`。例如 `v-slot:header`
可以被重写为 `#header`：

```html
父组件

<Article>
      <template #title>
        <h3>一首诗</h3>
      </template>
      <template #content>
        <div>
          <p>啊，大海</p>
          <p>啊，大海</p>
          <p>啊，大海</p>
        </div>
      </template>
      <template #footer>
        <div>
          作者：李白
        </div>
      </template>
    </Article>

export default {
  components: {
    Left,
    Article,
  },
};
```

```html
Article子组件
<template>
  <div class="article-container">
    <!-- 文章的标题 -->
    <div class="header-box">
      <slot name="title"></slot>
    </div>

    <!-- 文章的内容 -->
    <div class="content-box">
      <slot name="content"></slot>
    </div>

    <!-- 文章的作者 -->
    <div class="footer-box">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  //首字母大写
  name: "Article",
};
</script>

<style lang="less" scoped>
.article-container {
  > div {
    min-height: 150px;
  }
}
.header-box {
  background-color: pink;
}
.content-box {
  background-color: lightblue;
}
.footer-box {
  background-color: lightsalmon;
}
</style>
```

![17](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*17*2.jpg)



#### 作用域插槽

> 在封装组件时，为预留的`<slot>`提供属性对应的值，这种用法，叫做 “作用域插槽 ”

```html
父组件
<template #content="scope">
        <div>
          <p>啊，大海</p>
          <p>啊，大海</p>
          <p>啊，大海</p>
          <p>{{ scope }}</p>
        </div>
      </template>

子组件
<div class="content-box">
      <!-- 在封装组件时，为预留的<slot>提供属性对应的值，这种用法，叫做 “作用域插槽 ” -->
      <slot name="content" msg="hello vue"></slot>
</div>

```

![18](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*18*5.jpg)

#### 作用域插槽的解构赋值

```html
父组件
<!-- <template #content="scope"> -->
      <!-- 可以使用解构赋值使用 -->
      <template #content="{msg,user}">
        <div>
          <p>啊，大海</p>
          <p>啊，大海</p>
          <p>啊，大海</p>
          <!-- <p>{{ scope }}</p> -->
          <!-- 解构赋值使用 -->
          <p>{{ msg }}</p>
          <p>{{ user }}</p>
        </div>
      </template>


子组件
<!-- 文章的内容 -->
    <div class="content-box">
      <!-- 在封装组件时，为预留的<slot>提供属性对应的值，这种用法，叫做 “作用域插槽 ” -->
      <slot name="content" msg="hello vue"   :user="userinfo"></slot>
    </div>
```







## 自定义指令

### 1. 什么是自定义指令

`vue `官方提供了 `v-text`、`v-for`、`v-model`、`v-if `等常用的指令。除此之外 `vue `还允许开发者自定义指令。

### 2. 自定义指令的分类

`vue `中的自定义指令分为两类，分别是：

- 私有自定义指令
- 全局自定义指令

### 3. 私有自定义指令

在每个 `vue `组件中，可以在 `directives `节点下声明私有自定义指令。示例代码如下：

![19](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*19*7.jpg)

### 4. 使用自定义指令

在使用自定义指令时，需要加上` v-` 前缀。示例代码如下：

![20](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*20*6.jpg)

### 5. 为自定义指令动态绑定参数值

在 `template `结构中使用自定义指令时，可以通过等号（=）的方式，为当前指令动态绑定参数值：

![21](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*21*a.jpg)

### 6. 通过 `binding `获取指令的参数值

在声明自定义指令时，可以通过形参中的第二个参数，来接收指令的参数值：

![22](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*22*3.jpg)

### 7. `update `函数

`bind `函数只调用 1 次：当指令第一次绑定到元素时调用，当 `DOM `更新时 `bind `函数不会被触发。 `update `函
数会在每次 `DOM `更新时被调用。示例代码如下：

![23](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*23*7.jpg)

### 8. 函数简写

如果 `insert `和`update `函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式：

![24](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*24*c.jpg)

### 9. 全局自定义指令

全局共享的自定义指令需要通过`Vue.directive()`进行声明，示例代码如下：

![25](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:58*25*7.jpg)

## 总结

1. 能够掌握 `keep-alive` 元素的基本使用

   - 标签、`include `属性

2. 能够掌握插槽的基本用

   - 标签、具名插槽、作用域插槽、后备内容

3. 能够知道如何自定义指令

   -  私有自定义指令 `directives: { }`

   - 全局自定义指令` Vue.directive()`

        