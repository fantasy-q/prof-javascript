# 第 23 章 JSON

## 目录
- [第 23 章 JSON](#第-23-章-json)
  - [目录](#目录)
  - [语法](#语法)
    - [简单值](#简单值)
    - [对象](#对象)
    - [数组](#数组)
  - [解析与序列化](#解析与序列化)
    - [JSON 对象](#json-对象)
    - [序列化选项](#序列化选项)
    - [解析选项](#解析选项)

## 语法

### 简单值

字符串, 数值, 布尔值和 `null` 都是简单值

JSON 字符串必须使用**双引号**

### 对象

JSON 对象中的**属性名**必须使用**双引号**包围起来

没有变量声明, 无需分号结尾

### 数组

类似于对象, 可以与对象结合形成复杂的数据结构

## 解析与序列化

JSON 可以直接被解析为可用的 JavaScript 对象, 是Web 服务的事实序列化标准

### JSON 对象

早期 JSON 解析器基本上相当于 `eval()`

- JSON 是 JavaScript 语法的子集

ECMAScript 5 增加了 JSON 全局对象

- 在主流浏览器都得到了支持
- 旧版本浏览器可以使用[<ruby>垫片<rt>shim</rt></ruby>脚本](https://github.com/douglascrockford/JSON-js)

`JSON.stringify()`

- 把 JavaScript 对象转换成 JSON 字符串

`JSON.parse()`

- 把 JSON 字符串转换成 JavaScript 对象

### 序列化选项

除了对象, `stringify()` 还能另外接收两个参数

- `JSON.stringify(object[, filter, indentingOption])`

过滤结果

- `filter` 参数可以是数组或函数

字符串缩进

- `indenting` 

`toJSON()` 方法

- 自定义 JSON 序列化

```js
let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017,
  toJSON: function() {
    return this.title;
  }
};
let jsonText = JSON.stringify(book);
console.log(jsonText);
// "Professional JavaScript"
```

### 解析选项

`parse()` 也能另外接收额外一个参数

- 传给 `stringify()` 其过滤作用的替代函数
- 这个参数被称作还原函数  
- 