---
title: JavaScript手写Array的39个内置函数
description: JavaScript手写Array的39个内置函数(特全)
isOriginal: true
icon: javascript
date: 2022-11-02
category:
  - 技术文章
  - JavaScript
  - ES6
tag:
  - javascript
  - Array
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



> JavaScript 手写 Array 的 39 个内置函数(特全)

<!-- more -->

**定义一个测试数据**

```js
let arr = [1, 2, 3, 4, 5];
```

## Array.prototype.at()

```js
/*
Array.prototype.at()
at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。
    负整数从数组中的最后一个元素开始倒数。
*/
Array.prototype._at = function (index) {
  let len = this.length;
  if (index >= 0) {
    return this[index];
  } else {
    return this[len + index];
  }
};
// console.log(arr._at(0)); // 1
```

## Array.prototype.concat()

```js
/*
Array.prototype.concat()
concat() 方法用于合并两个或多个数组。
        此方法不会更改现有数组，而是返回一个新数组。
*/
Array.prototype._concat = function (...args) {
  let newArr = [...this];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        newArr.push(args[i][j]);
      }
    } else {
      newArr.push(args[i]);
    }
  }
  return newArr;
};
// console.log(arr._concat(1, 2, 3, [4, 5, 6])); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]
```

## Array.prototype.copyWithin()

```js
/*
Array.prototype.copyWithin()
copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
*/
Array.prototype._copyWithin = function (target, start = 0, end = this.length) {
  let newArr = [...this];
  let len = newArr.length;
  let count = 0;
  if (target < 0) {
    target = len + target;
  }
  if (start < 0) {
    start = len + start;
  }
  if (end < 0) {
    end = len + end;
  }
  for (let i = start; i < end; i++) {
    newArr[target + count] = this[i];
    count++;
  }
  return newArr;
};
// console.log(arr._copyWithin(0, 3)); // [4, 5, 3, 4, 5]
```

## Array.prototype.entries()

```js
/*
Array.prototype.entries()
entries() 方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对。
*/
Array.prototype._entries = function () {
  let newArr = [...this];
  let len = newArr.length;
  let obj = {};
  for (let i = 0; i < len; i++) {
    obj[i] = newArr[i];
  }
  return obj;
};

// console.log(arr._entries()); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
```

## Array.prototype.every()

```js
/*
Array.prototype.every()
every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
 */
Array.prototype._every = function (callback) {
  let newArr = [...this];
  let len = newArr.length;
  for (let i = 0; i < len; i++) {
    if (!callback(newArr[i], i, newArr)) {
      return false;
    }
  }
  return true;
};
// console.log(arr._every((item) => item > 0)); // true
```

## Array.prototype.fill()

```js
/*
Array.prototype.fill()
fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
*/
Array.prototype._fill = function (value, start = 0, end = this.length) {
  let newArr = [...this];
  let len = newArr.length;
  if (start < 0) {
    start = len + start;
  }
  if (end < 0) {
    end = len + end;
  }
  for (let i = start; i < end; i++) {
    newArr[i] = value;
  }
  return newArr;
};
// console.log(arr._fill(0, 1, 3)); // [1, 0, 0, 4, 5]
```

## Array.prototype.filter()

```js
/*
Array.prototype.filter()
filter() 方法创建给定数组一部分的浅拷贝 (en-US)，其包含通过所提供函数实现的测试的所有元素。
*/
Array.prototype._filter = function (callback) {
  let newArr = [...this];
  let len = newArr.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    if (callback(newArr[i], i, newArr)) {
      result.push(newArr[i]);
    }
  }
  return result;
};
// console.log(arr._filter((item) => item > 2)); // [3, 4, 5]
```

## Array.prototype.find()

```js
/*
Array.prototype.find()
find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
*/
Array.prototype._find = function (callback) {
  let newArr = [...this];
  let len = newArr.length;
  for (let i = 0; i < len; i++) {
    if (callback(newArr[i], i, newArr)) {
      return newArr[i];
    }
  }
  return undefined;
};
// console.log(arr._find((item) => item > 2)); // 3
```

## Array.prototype.findIndex()

```js
/*
Array.prototype.findIndex()
findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。
*/
Array.prototype._findIndex = function (callback) {
  let newArr = [...this];
  let len = newArr.length;
  for (let i = 0; i < len; i++) {
    if (callback(newArr[i], i, newArr)) {
      return i;
    }
  }
  return -1;
};
// console.log(arr._findIndex((item) => item > 2)); // 2
```

## Array.prototype.findLast()

```js
/*
Array.prototype.findLast()
findLast() 方法返回数组中满足提供的测试函数条件的最后一个元素的值。如果没有找到对应元素，则返回 undefined。
*/
Array.prototype._findLast = function (callback) {
  let newArr = [...this];
  let len = newArr.length;
  for (let i = len - 1; i >= 0; i--) {
    if (callback(newArr[i], i, newArr)) {
      return newArr[i];
    }
  }
  return undefined;
};
// console.log(arr._findLast((item) => item > 2)); // 5
```

## Array.prototype.findLastIndex()

```js
/*
Array.prototype.findLastIndex()
findLastIndex() 方法返回数组中满足提供的测试函数条件的最后一个元素的索引。若没有找到对应元素，则返回 -1。
*/
Array.prototype._findLastIndex = function (callback) {
  let newArr = [...this];
  let len = newArr.length;
  for (let i = len - 1; i >= 0; i--) {
    if (callback(newArr[i], i, newArr)) {
      return i;
    }
  }
  return -1;
};
// console.log(arr._findLastIndex((item) => item > 2)); // 4
```

## Array.prototype.flat()

```js
/*
Array.prototype.flat()
flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
*/
Array.prototype._flat = function (depth = 1) {
  let newArr = [...this];
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (Array.isArray(newArr[i]) && depth > 0) {
      result.push(...newArr[i]._flat(depth - 1));
    } else {
      result.push(newArr[i]);
    }
  }
  return result;
};
// console.log(arr._flat(2)); // [1, 2, 3, 4, 5]
```

## Array.prototype.flatMap()

```js
/*
Array.prototype.flatMap()
flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
*/
Array.prototype._flatMap = function (callback) {
  let newArr = [...this];
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    result.push(callback(newArr[i], i, newArr));
  }
  return result._flat();
};
// console.log(arr._flatMap((item) => [item, item * 2])); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
```

## Array.prototype.forEach()

```js
/*
Array.prototype.forEach()
forEach() 方法对数组的每个元素执行一次给定的函数。
*/
Array.prototype._forEach = function (callback) {
  let newArr = [...this];
  let len = newArr.length;
  for (let i = 0; i < len; i++) {
    callback(newArr[i], i, newArr);
  }
};
// arr._forEach((item) => console.log(item)); // 1 2 3 4 5
```

## Array.from()

```js
/*
Array.from()
Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
*/
Array.prototype._from = function (obj) {
  let newArr = [...this];
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    result.push(newArr[i]);
  }
  return result;
};
// console.log(Array._from); // [1, 2, 3, 4, 5]
```

## Array.prototype.group()

```js
/*
Array.prototype.group()
group() 方法将数组中的元素分组，返回一个对象，对象的键是回调函数的返回值，值是对应的元素组成的数组。
*/
Array.prototype._group = function (callback) {
  let newArr = [...this];
  let result = {};
  for (let i = 0; i < newArr.length; i++) {
    let key = callback(newArr[i], i, newArr);
    if (result[key]) {
      result[key].push(newArr[i]);
    } else {
      result[key] = [newArr[i]];
    }
  }
  return result;
};
// console.log(arr._group((item) => item % 2)); // {0: Array(2), 1: Array(3)} /  { '0': [ 2, 4 ], '1': [ 1, 3, 5 ] }
```

## Array.prototype.groupToMap()

```js
/*
Array.prototype.groupToMap()
groupToMap() 方法将数组中的元素分组，返回一个 Map 对象，Map 对象的键是回调函数的返回值，值是对应的元素组成的数组。
*/
Array.prototype._groupToMap = function (callback) {
  let newArr = [...this];
  let result = new Map();
  for (let i = 0; i < newArr.length; i++) {
    let key = callback(newArr[i], i, newArr);
    if (result.has(key)) {
      result.get(key).push(newArr[i]);
    } else {
      result.set(key, [newArr[i]]);
    }
  }
  return result;
};
// console.log(arr._groupToMap((item) => item % 2)); // Map(2) { 0 => [ 2, 4 ], 1 => [ 1, 3, 5 ] }
```

## Array.prototype.includes()

```js
/*
Array.prototype.includes()
includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
*/
Array.prototype._includes = function (value, fromIndex = 0) {
  let newArr = [...this];
  let len = newArr.length;
  if (fromIndex >= len) {
    return false;
  }
  for (let i = fromIndex; i < len; i++) {
    if (newArr[i] === value) {
      return true;
    }
  }
  return false;
};
// console.log(arr._includes(3)); // true
```

## Array.prototype.indexOf()

```js
/*
Array.prototype.indexOf()
indexOf() 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。
*/
Array.prototype._indexOf = function (value, fromIndex = 0) {
  let newArr = [...this];
  let len = newArr.length;
  if (fromIndex >= len) {
    return -1;
  }
  for (let i = fromIndex; i < len; i++) {
    if (newArr[i] === value) {
      return i;
    }
  }
  return -1;
};
// console.log(arr._indexOf(3)); // 2
```

## Array.isArray()

```js
/*
Array.isArray()
Array.isArray() 用于确定传递的值是否是一个 Array。
*/
Array.prototype._isArray = function (obj) {
  return Object.prototype.toString.call(newArr) === "[object Array]";
};
// console.log(Array._isArray(arr)); // true
```

## Array.prototype.join()

```js
/*
Array.prototype.join()
join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。
*/
Array.prototype._join = function (separator = ",") {
  let newArr = [...this];
  let result = "";
  for (let i = 0; i < newArr.length; i++) {
    if (i === newArr.length - 1) {
      result += newArr[i];
    } else {
      result += newArr[i] + separator;
    }
  }
  return result;
};
// console.log(arr._join("-")); // 1-2-3-4-5
```

## Array.prototype.keys()

```js
/*
Array.prototype.keys()
keys() 方法返回一个包含数组中每个索引键的 Array Iterator 对象。
*/
Array.prototype._keys = function () {
  let newArr = [...this];
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    result.push(i);
  }
  return result;
};
// console.log(arr._keys()); // [ 0, 1, 2, 3, 4 ]
```

## Array.prototype.lastIndexOf()

```js
/*
Array.prototype.lastIndexOf()
lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
*/
Array.prototype._lastIndexOf = function (value, fromIndex = this.length - 1) {
  let newArr = [...this];
  if (fromIndex >= newArr.length) {
    fromIndex = newArr.length - 1;
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (newArr[i] === value) {
      return i;
    }
  }
  return -1;
};
// console.log(arr._lastIndexOf(3)); // 2
```

## Array.prototype.map()

```js
/*
Array.prototype.map()
map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
 */
Array.prototype._map = function (callback) {
  let newArr = [...this];
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    result.push(callback(newArr[i], i, newArr));
  }
  return result;
};
// console.log(arr._map((item) => item * 2)); // [ 2, 4, 6, 8, 10 ]
```

## Array.of()

```js
/*
Array.of()
Array.of() 方法通过可变数量的参数创建一个新的 Array 实例，而不考虑参数的数量或类型。
*/
Array.prototype._of = function (...args) {
  let newArr = [...this];
  let result = [];
  for (let i = 0; i < args.length; i++) {
    result.push(args[i]);
  }
  return result;
};
// console.log(Array._of(1, 2, 3)); // [ 1, 2, 3 ]
```

## Array.prototype.pop()

```js
/*
Array.prototype.pop()
pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
*/
Array.prototype._pop = function () {
  let newArr = [...this];
  let result = newArr[newArr.length - 1];
  newArr.length = newArr.length - 1;
  return result;
};
// console.log(arr._pop()); // 5
```

## Array.prototype.push()

```js
/*
Array.prototype.push()
push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
*/
Array.prototype._push = function (...args) {
  let newArr = [...this];
  for (let i = 0; i < args.length; i++) {
    newArr[newArr.length] = args[i];
  }
  return newArr.length;
};
// console.log(arr._push(6, 7, 8)); // 8
```

## Array.prototype.reduce()

```js
/*
Array.prototype.reduce()
reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
*/
Array.prototype._reduce = function (callback, initialValue) {
  let arr = this;
  let res = initialValue;
  for (let i = 0; i < arr.length; i++) {
    res = callback(res, arr[i], i, arr);
  }
  return res;
};
// console.log([1, 2, 3, 4, 5]._reduce((a, b) => a + b, 0)); // 15
```

## Array.prototype.reduceRight()

```js
/*
Array.prototype.reduceRight()
reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
*/
Array.prototype._reduceRight = function (callback, initialValue) {
  let arr = this;
  let res = initialValue;
  for (let i = arr.length - 1; i >= 0; i--) {
    res = callback(res, arr[i], i, arr);
  }
  return res;
};
// console.log(arr._reduceRight((a, b) => a + b, 0)); // 15
```

## Array.prototype.reverse()

```js
/*
Array.prototype.reverse()
reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
*/
Array.prototype._reverse = function () {
  let arr = this;
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
};
// console.log(arr._reverse()); // [5, 4, 3, 2, 1]
```

## Array.prototype.shift()

```js
/*
Array.prototype.shift()
shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
*/
Array.prototype._shift = function () {
  let arr = this;
  let res = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return res;
};
// console.log(arr._shift()); // 1
```

## Array.prototype.slice()

```js
/*
Array.prototype.slice()
slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
*/
Array.prototype._slice = function (start, end) {
  let arr = this;
  let res = [];
  let len = arr.length;
  start = start || 0;
  end = end || len;
  for (let i = start; i < end; i++) {
    res.push(arr[i]);
  }
  return res;
};
// console.log(arr._slice(1, 3)); // [2, 3]
```

## Array.prototype.some()

```js
/*
Array.prototype.some()
some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。
*/
Array.prototype._some = function (callback) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
// console.log(arr._some((item) => item > 3)); // true
```

## Array.prototype.sort()

```js
/*
Array.prototype.sort()
sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的
*/
Array.prototype._sort = function (callback) {
  let arr = this;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (callback(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
// console.log(arr._sort((a, b) => a - b)); // [1, 2, 3, 4, 5]
```

## Array.prototype.splice()

```js
/*
Array.prototype.splice()
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
*/
Array.prototype._splice = function (start, deleteCount, ...items) {
  let arr = this;
  let len = arr.length;
  let res = [];
  let addCount = items.length;
  let deleteArr = [];
  start = start || 0;
  deleteCount = deleteCount || len;
  for (let i = 0; i < deleteCount; i++) {
    deleteArr.push(arr[start + i]);
  }
  for (let i = 0; i < len - start - deleteCount; i++) {
    arr[start + i] = arr[start + deleteCount + i];
  }
  arr.length = len - deleteCount + addCount;
  for (let i = 0; i < addCount; i++) {
    arr[start + i] = items[i];
  }
  return deleteArr;
};
// console.log(arr._splice(1, 2, 6, 7)); // [2, 3]
```

## Array.prototype.toLocaleString()

```js
/*
Array.prototype.toLocaleString()
toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
*/
Array.prototype._toLocaleString = function () {
  let arr = this;
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i].toLocaleString();
    if (i < arr.length - 1) {
      res += ",";
    }
  }
  return res;
};
// console.log(arr._toLocaleString()); // 1,2,3,4,5
```

## Array.prototype.toString()

```js
/*
Array.prototype.toString()
toString() 方法返回一个字符串，表示指定的数组及其元素。
*/
Array.prototype._toString = function () {
  let arr = this;
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    if (i < arr.length - 1) {
      res += ",";
    }
  }
  return res;
};
// console.log(arr._toString()); // 1,2,3,4,5
```

## Array.prototype.unshift()

```js
/*
Array.prototype.unshift()
unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。
*/
Array.prototype._unshift = function (...items) {
  let arr = this;
  let len = arr.length;
  let addCount = items.length;
  for (let i = len - 1; i >= 0; i--) {
    arr[i + addCount] = arr[i];
  }
  for (let i = 0; i < addCount; i++) {
    arr[i] = items[i];
  }
  return arr.length;
};
// console.log(arr._unshift(6, 7)); // 7
```

## Array.prototype.values()

```js
/*
Array.prototype.values()
values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。
*/
Array.prototype._values = function () {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
};
// console.log(arr._values());  // [1, 2, 3, 4, 5]
```
