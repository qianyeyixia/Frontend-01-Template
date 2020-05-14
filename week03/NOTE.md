---
note:
    createdAt: 2020-04-29T13:04:21.272Z
    modifiedAt: 2020-04-29T13:11:51.180Z
    tags: []
---
# JavaScript 中的对象

- 宿主对象(host Objects): 由js 宿主管径提供的对象，行为由宿主环境决定
- 内置对象(Built-in Objects) 由 js 语言提供的对象
  - 固有对象(Intrinsic Objects) 由标准规定，随着js运行时创建而自动生成的对象实例
  - 原生对象（Native Objects） 可以由用户通过 Array。RegExp 等内置构造器或者特殊语法创建的对象
- 普通对象（Ordinary Objects）由 {}语法，object 构造器或者class关键字定义类的创建对象，他能够被原型继承

## 宿主对象
- 浏览器对象
  - window
  - doucment.createElement

## 固有对象
``` JavaScript
var set = new Set();
var objects = [
    eval,
    isFinite,
    isNaN,
    parseFloat,
    parseInt,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    Array,
    Date,
    RegExp,
    Promise,
    Proxy,
    Map,
    WeakMap,
    Set,
    WeakSet,
    Function,
    Boolean,
    String,
    Number,
    Symbol,
    Object,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Atomics,
    JSON,
    Math,
    Reflect];
objects.forEach(o => set.add(o));

for(var i = 0; i < objects.length; i++) {
    var o = objects[i]
    for(var p of Object.getOwnPropertyNames(o)) {
        var d = Object.getOwnPropertyDescriptor(o, p)
        if( (d.value !== null && typeof d.value === "object") || (typeof d.value === "function"))
            if(!set.has(d.value))
                set.add(d.value), objects.push(d.value);
        if( d.get )
            if(!set.has(d.get))
                set.add(d.get), objects.push(d.get);
        if( d.set )
            if(!set.has(d.set))
                set.add(d.set), objects.push(d.set);
    }
}
```

## 原生对象

<table>
| 基础类型 | 基础功能和数据结构 | 错误类型       | 二进制操作       | 带类型的数组      |
| -------- | ------------------ | -------------- | ---------------- | ----------------- |
| Boolean  | Array              | Error          | ArrayBuffer      | Float32Array      |
| String   | Date               | EvalError      | ShareArrayBuffer | Float64Array      |
| Number   | RegExp             | RangeError     | DateView         | Int8Array         |
| Symbol   | Promise            | ReferenceError |                  | Int16Array        |
| Object   | Proxy              | SyntaxError    |                  | Int32Array        |
|          | Map                | TypeError      |                  | UInt8Array        |
|          | WeakMap            | URIError       |                  | UInt16Array       |
|          | Set                |                |                  | UInt32Array       |
|          | WeakSet            |                |                  | UInt8ClampedArray |
|          | Function           |                |                  |                   |





- 没有办法用js模拟实现，也无法用 class/extend继承
- 这些构造器创建的对象多数使用了私有字段，举个例子
  Error: [[ErrorData]]
  Boolean: [[BooleanData]]
  Number: [[NumberData]]
  Date: [[DateValue]]
  RegExp: [[RegExpMatcher]]
  Symbol: [[SymbolData]]
  Map: [[MapData]]
- 用原生继承方法无法正常工作

## 特殊行为对象
它们常见的下标运算（就是使用中括号或者点来做属性访问）或者设置原型跟普通对象不同

Array：Array 的 length 属性根据最大的下标自动发生变化。
Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
Arguments：Arguments 的非负整数型下标属性跟对应的变量联动。
模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
Immutable Prototype：[[Prototype]]一旦初始化就无法更改。
bind 后的 function：跟原来的函数相关联
Proxy：每个Proxy都有一个[[ProxyHandler]]和一个[[ProxyTarget]]，他们的值是一个object或者null
