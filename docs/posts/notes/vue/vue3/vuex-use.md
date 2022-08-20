---
title: Vuex使用
description: 如何使用js将表单选中的文件转化为Base64编码格式  Vuex学习笔记
isOriginal: true
icon: vue
date: 2022-08-10
category:
  - 我的学习笔记
  - Vue3
  - Vuex
tag:
  - vue3
  - vuex
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


> Vuex学习笔记


<!-- more -->


## 对于`vuex`的理解

>`Vuex `是一个专为 `Vue.js` 应用程序开发的**状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

### 状态管理模式

- **状态**，驱动应用的数据源；
- **视图**，以声明方式将**状态**映射到视图；
- **操作**，响应在**视图**上的用户输入导致的状态变化。

以下是一个表示“单向数据流”理念的简单示意：

![img](https://vuex.vuejs.org/flow.png)

但是，当我们的应用遇到**多个组件共享状态**时，单向数据流的简洁性很容易被破坏：

- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢？在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。

这就是 `Vuex `背后的基本思想，借鉴了 [Flux](https://facebook.github.io/flux/docs/overview)、[Redux](http://redux.js.org/) 和 [The Elm Architecture](https://guide.elm-lang.org/architecture/)。与其他模式不同的是，`Vuex `是专门为 `Vue.js` 设计的状态管理库，以利用 `Vue.js` 的细粒度数据响应机制来进行高效的状态更新。

![vuex](https://vuex.vuejs.org/vuex.png)

### 什么情况下我应该使用[`Vuex`](https://vuex.vuejs.org/zh/#什么情况下我应该使用-vuex？)?

`Vuex `可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果您不打算开发大型单页应用，使用 `Vuex `可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 `Vuex`。一个简单的 [store 模式](https://v3.cn.vuejs.org/guide/state-management.html#从零打造简单状态管理)就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，`Vuex `将会成为自然而然的选择。引用 `Redux `的作者 `Dan Abramov `的话说就是：

> Flux 架构就像眼镜：您自会知道什么时候需要它。

​																																	**[摘自官网](https://vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E6%88%91%E5%BA%94%E8%AF%A5%E4%BD%BF%E7%94%A8-vuex%EF%BC%9F)**

## `vuex`概述

### 使用 `Vuex `统一管理状态的好处

1. 能够在`vuex`中集中管理共享的数据，易于开发和后期维护
2. 能够高效地实现组件之间的数据共享，提高开发效率
3. 存储在 `vuex` 中的数据都是响应式的，能够实时保持数据也页面的同步

### 什么样的数据适合存储在 `vuex`中

​		一般情况下，只有组件之间共享的数据，才有必要存储到`vuex`中;对于组件中的私有数据，依旧存储在组件自身的data中即可。

## `Vuex `的基本使用

### 1.安装 `vuex `依赖包

```sh
npm install vuex@next --save
```

### 2.导入`vuex`包

```js
import Vues from 'vuex'
Vue.use(Vuex)
```

### 3.创建`store`对象

```js
const store = new Vuex.Store({
  // state 中存放的就是全局共享的数据
  state:{ count:0 }
})
```

### 4.将store对象挂载到`vue`实例中

```JS
new Vue({
  el:'#app',
  ...
  // 将创建的共享数据对象，挂载到Vue实例中
  // 所有的组件，就可以直接从store中获取全局的数据了
  store
})
```

## 在`vite`中使用

### 创建`vite`项目并安装依赖

```sh
npm create vite@latest
```

![image-20220809195407969](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/typora-user-images/2022-08-09-19:54:08*image-20220809195407969*9.png)

### 安装`vuex`

```sh
npm install vuex@next --save
```

### 使用

> 在`main.js`同一级下创建`store.js`
>
> `src/store.js`
>
> ```js
> import Vue from "vue";
> // 导入Vuex
> import Vuex from "vuex";
> Vue.use(Vuex);
> // 导出一个vuex实例对象
> export default new Vuex.Store({
> state: {},
> mutations: {},
> actions: {},
> });
> 
> ```
>
> 在`main.js`内，导入`vuex`实例对象，并挂载
>
> ```js {5,9}
> import { createApp } from "vue";
> import "./style.css";
> import App from "./App.vue";
> // 导入vuex 的store
> import store from "./store";
> 
> const app = createApp(App);
> // 使用vuex
> app.use(store);
> app.mount("#app");
> ```

## `Vuex`的核心概念

### `State`

State提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储。

```js
const store = new Vuex.Store({
  state: { count:0 },
});
```

**组件访问State中数据的第一种方式:**

```js
this.$store.state.全局数据名称
```

```html
<h3>当前最新的count值为：{{ $store.state.count }}</h3>
```

**组件访问State中数据的第二种方式:**

```js
// 1．从vuex中按需导入mapstate函数
import { mapState } from 'vuex'
```

通过刚才导入的`mapState`函数，将当前组件需要的全局数据，映射为当前组件的`computed`计算属性;

```js
computed:{
  ...mapState(['count'])
}
```

```vue
<template>
    <h3>当前最新的count值为：{{ count }}</h3>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    // 一定要加展开运算符，否则无法获取到state中的count值，并且会报错
    ...mapState(['count']),
  },
}
</script>
```

> **所以到底选择哪一种呢？**
>
> 不做要求，根据自己需求使用，两种都可以

### Mutation

`Mutation`用于变更`Store`中的数据。

1. 只能通过`mutation`变更`Store`数据，不可以直接操作`Store `中的数据。
2. 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。

#### 调用`Mutation`的第一种方式

##### 简单用法

> 定义 `Mutation`
>
> ```js
> const store = new Vuex.Store({
> state: {
>  count: 0,
> },
> mutations: {
>  // 可以定义一个 add 函数 ，将 state 参数传递进去
>  // 那么可以直接应用 state 里面的数据进行修改
>  // 方便维护，避免在多数据的情况下，找不到是哪一个组件操作了数据
>  add(state) {
>    // 变更状态
>    state.count++
>  },
> },
> })
> ```
>
> 触发`Mutation`
>
> ```js
> methods: {
>  handler1() {
>    // 触发 mutation 的第一种方式
>    this.$store.commit('add')
>  },
> },
> ```
>
> 

##### 携带参数

> 在触发时携带参数
>
> ```js
> const store = new Vuex.Store({
> state: {
>  count: 0,
> },
> mutations: {
>  // 定义函数时传入第二个参数
>  // 可以是对象
>  addN(state, step) {
>    // 变更状态，由于传递的是对象格式数据，需要点出来数据
>    state.count += step.num
>  },
> },
> })
> ```
>
> 触发`Mutation`
>
> ```js
> methods: {
>  btnHandler1() {
>    // 如果 mutation内使用的是对象，那么这里也要同样传递对应对象
>    // commit 的作用，就是调用 某个 mutation 函数
>    this.$store.commit('addN', {
>      num: 2,
>    })
>  },
> },
> ```
>
> 



**错误案例演示，不推荐**:arrow_down:

> - 在button内定义了一个点击事件
> - 在methods中使用这个点击事件
> - 当button点击时，点击事件引用`this.$store.state.count++`
>
> ```js {3,4}
> <template>
>   <div>
>     <h3>当前最新的count值为：{{ $store.state.count }}</h3>
>     <button @click="btnHandler1">+1</button>
>   </div>
> </template>
> 
> <script>
> export default {
>   data() {
>     return {}
>   },
>   methods: {
>     btnHandler1() {
>       this.$store.state.count++
>     },
>   },
> }
> </script>
> ```
>
> ![wrong-count](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/%E6%A1%8C%E9%9D%A2/2022-08-09-20:43:25*wrong-count*c.gif)
>
> 可以 +1，并且控制台不会报错
>
> 注意: 但是这种方式是完全不正确的



#### 调用`Mutation`的第二张方法

`this.$store.commit()`是触发`mutations`的第一种方式，触发`mutations`的第二种方式:arrow_down:

```js
// 1.从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'
```

通过刚才导入的`mapMutations`函数，将需要的`mutations`函数，映射为当前组件的`methods`方法:

```js
// 2．将指定的 mutations 函数，映射为当前组件的 methods函数
methods:{
  ...mapMutations(['add','addN'])
}
```

##### 具体使用

> `store.js`
>
> ```js {5-12}
> const store = new Vuex.Store({
>   state: {
>     count: 0,
>   },
>   mutations: {
>     sub(state) {
>       state.count--
>     },
>     subN(state, step) {
>       state.count -= step
>     },
>   },
>   actions: {},
> })
> ```
>
> 组件内
>
> ```js {3-5,10-11,15-24}
> <template>
>   <div>
>     <h3>当前最新的count值为：{{ count }}</h3>
>     <button @click="btnHandler1">-1</button>
>     <button @click="btnHandler2">-N</button>
>   </div>
> </template>
> 
> <script>
> // 按需导入 mapMutations  
> import { mapMutations } from 'vuex'
> import { mapState } from 'vuex'
> export default {
>   methods: {
>     // 声明store创建的函数,并使用展开运算符
>     ...mapMutations(['sub', 'subN']),
>     // 本组件的点击事件触发
>     btnHandler1() {
>       // 直接使用 this 调用 store 内的方法
>       this.sub()
>     },
>     btnHandler2() {
>       this.subN(3)
>     },
>   },
> }
> </script>
> ```

##### 注意

> 在`Mutations` 函数内，不能使用异步操作

```js
//需求，点击按钮，延迟一秒再进行 +1
mutations:{
  add(state) {
   setTimeOut(()=>{
     state.count++
   },1000)
 },
}
```

这样做，会使`vue devtools`察觉不到变化

解决办法是使用`Action`:arrow_down:

### Action

Action用于处理异步任务。

如果通过异步操作变更数据，必须通过Action，而不能使用Mutation，但是在Action中还是要通过触发Mutation的方式间接变更数据。

#### 调用 Action的第一种方法

##### 简单使用

> ```js
> // 定义 Action
> const store = new Vuex.Store({
>   state: {
>     count: 0,
>   },
>   mutations: {
>     add(state) {
>       // 变更状态
>       state.count++
>     },
>   },
>   actions: {
>     // 在 action 中 声明一个异步方法
>     // 传递一个参数
>     // 在方法体内通过 context.commit() 的方式调用 mutations 中的方法
>     addAsync(context){
>       setTimeout(() => {
>         context.commit('add')
>       }, 1000)
>     }
>   }
>   
> })
> ```
>
> ```js
> // 触发 Action
> // 使用 this.$store.dispatch() 调用
> methods: {
>     btnHandler1() {
>       // 触发 action 的第一种方式
>       // 这里的 dispatch 函数，专门用来触发 action
>       this.$store.dispatch('addAsync')
>     },
> ```
>
> 

##### 携带参数

> ```js
> const store = new Vuex.Store({
>   state: {
>     count: 0,
>   },
>   mutations: {
>     addN(state, step) {
>       // 变更状态
>       state.count += step
>     },
>   },
>   actions: {
>     // 异步携带参数
>     addNAsync(context, step) {
>       setTimeout(() => {
>         // 直接在commit 函数内放入参数
>         context.commit('addN', step)
>       }, 1000)
>     },
>   },
> })
> ```
>
> ```js
> methods: {
>     btnHandler1() {
>      // 将参数传入 dispatch 内调用 Action 内的函数 
>       this.$store.dispatch('addNAsync', 5)
>     },
>   },
> ```
>
> 

##### 使用`async await` 进行异步操作



> - 在这里，我在`state`定义了一个数据`ivwvInfo`表示我的`GitHub`信息
> - 在`mutations` 内定义了一个`setIvwvInfo`方法，表示将传递的参数保存到`ivwvInfo`中去
> - 在`actions`内定义了一个`getghInfo`方法，表示异步获取我的`GitHub`信息
>   - 使用`fecth`API,请求`https://api.github.com/users/ivwv`地址
>   - 在方法内我打印输出了一下`data`
>   - 将响应的结果使用`context.commit`调用`mutations`内的方法`setIvwvInfo`,并将数据传递
>
> ```js
> const store = new Vuex.Store({
>   state: {
>     count: 0,
>     ivwvInfo: {},
>   },
>   mutations: {
>     // promise
>     setIvwvInfo(state, data) {
>       state.ivwvInfo = data
>     },
>   },
>   actions: {
>     // promise 异步
>     async getghInfo(context) {
>       const res = await fetch('https://api.github.com/users/ivwv')
>       const data = await res.json()
>       console.log(data)
>       context.commit('setIvwvInfo', data)
>     },
>   },
> })
> 
> ```
>
> - 这里有两个按钮
>   - 第一个是测试打印 store 内的 state的值，是否能直接拿到
>
> ```js
> <template>
>   <div>
>     <h3>当前最新的count值为：{{ count }}</h3>
>     <button @click="btnHandler1">
>       +1,并打印当前store内的 count 和 ivevInfo</button
>     ><br />
>     <button @click="usePromise">获取用户数据(promise)</button>
>   </div>
> </template>
> 
> <script>
> import { mapState } from 'vuex'
> export default {
>   data() {
>     return {}
>   },
>   methods: {
>     btnHandler1() {
>       this.$store.commit('add')
>       // 测试能否在方法内使用store 内 state 的值
>       // 当点击这个按钮时，打印输出store中已存在 count值
>       console.log(this.count)
>       console.log(this.$store.state.count)
>       console.log('---')
>       // 当点击这个按钮时，打印输出store中已存在 ivwvInfo对象
>       console.log(this.ivwvInfo)
>       console.log(this.$store.state.ivwvInfo)
>     },
>     async usePromise() {
>       // 在这里我测试了一下在组件内的方法需要异步调用 Action内的异步方法，执行顺序自己定义，还是得在方法前加上 async 和使用 await，不然顺序会乱
>       console.log('------1')
>       await this.$store.dispatch('getghInfo')
>       console.log('------2')
>     },
>   },
>   computed: {
>     ...mapState(['count', 'ivwvInfo']),
>   },
> }
> </script>
> 
> <style></style>
> 
> ```
>
> >  **运行**
>
> - 点击第一个按钮
>   - 当还没先获取用户信息时，打印 `store `内的数据,`count`值是可以打印，但是`ivwvInfo`数据没有，因为没有获取，所以为空
>   - 但是发现`ivwvInfo`对象是一个`Proxy {}`
>
> ![actron1](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/%E6%A1%8C%E9%9D%A2/2022-08-10-16:21:53*actron1*2.gif)
>
> - 点击第二个按钮
>   - 如下图所示：点击第二个按钮后，`Action`内的方法使用`async  await`修饰过后，会异步执行，并且打印了一个对象
>   - 再次点击第一个按钮，还是打印出了一个`Proxy {}` 但是数据可以在`Target`中看到
>
> ![actron2](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/%E6%A1%8C%E9%9D%A2/2022-08-10-16:26:37*actron2*a.gif)

#### 调用`Action` 的第二种方法

`this.$store.dispatch()`是触发`actions`的第一种方式，触发`actions`的第二种方式:arrow_down:

> ```js
> // 1.从 vuex 中按需导入 mapActions函数
> import { mapActions } from 'vuex'
> ```
>
> 通过刚才导入的`mapActions`函数，将需要的actions函数，映射为当前组件的`methods`方法:
>
> ```js
> methods:{
>   ...mapActions(['addAsync', 'addNAsync']),
>     handler(){
>     this.addAsync()
>     // 携带参数继续添加参数即可
>     // 用法基本相同
>     // this.addNAsync(5)
>   }
> }
> ```

- 上面的简单使用是需要通过调用处理函数，在处理函数内通过`this`调用`Action`方法

- 也可以不用提供处理函数，直接将`...mapActions()`方法内的方法名给到点击事件或其他事件
  - 就相当于是定义在当前的组件的一个方法，可以直接使用在时间内
  - 因为调用方式是和组件内方法一样调用,通过`this.`的方式调用
  - `mapMutations`方法也是可以直接调用，看自己需求

> ```html
> <template>
>   <div>
>     <!-- 在点击事件内直接使用 Action 定义过的函数名 -->
>     <button @click="getghInfo">获取用户数据(promise)</button>
>   </div>
> </template>
> ```
>
> ```js
> <script>
> import { mapState } from 'vuex'
> // 1.从 vuex 中按需导入 mapActions函数
> import { mapActions } from 'vuex'
> export default {
>   data() {
>     return {
>       userInfo: {},
>     }
>   },
>   methods: {
>     // async usePromise() {
>     //   console.log('------1')
>     //   // await this.$store.dispatch('getghInfo')
>     //   await this.getghInfo()
>     //   console.log('------2')
>     //   // console.log(ivwvInfo)
>     //   // console.log(this.count)
>     // },
>     ...mapActions(['addAsync', 'addNAsync', 'getghInfo']),
>   },
>   computed: {
>     ...mapState(['count', 'ivwvInfo']),
>   },
> }
> </script>
> ```
>
> 

### Getter

`Getter `用于对`Store `中的数据进行加工处理形成新的数据。

`Getter `不会修改`store`里面的数据，只会对`store`的数据进行加工并返回

- `Getter`可以对`Store `中已有的数据加工处理之后形成新的数据，类似`Vue`的计算属性。
- `Store`中数据发生变化，`Getter`的数据也会跟着变化。

```js
// 定义 Getter
const store = new Vuex.Store({
  state:{
    count:0
  },
  getters:{
    showNum:state=>{
      return '当前最新的数量是 '+state.count;
    }
  }
})
```

##### 使用 `getter`的第一种方式：

```js
this.$store.getters.名称
```

```html
{{ this.$store.getters.showNum }}
```

##### 使用 `getter`的第二种方式：

```js
import { mapGetters } from 'vuex'

computed:{
  ...mapGetters(['showNum'])
}
```

```html
{{ showNum }}
```

