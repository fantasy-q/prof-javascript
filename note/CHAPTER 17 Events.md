# 第 17 章 事件

JavaScript 和 HTML 的**交互**是通过**事件**实现的

- 事件代表**文档**或**浏览器窗口**某个有意义的**时刻**
- 使用**<ruby>监听器<rt>Listener</rt></ruby>** (或叫**<ruby>处理程序<rt>Handler</rt></ruby>**)来订阅事件

## 目录

- [第 17 章 事件](#第-17-章-事件)
  - [目录](#目录)
  - [事件流](#事件流)
  - [事件处理程序](#事件处理程序)
  - [事件对象](#事件对象)
  - [事件类型](#事件类型)
    - [UI Events](#ui-events)
    - [Mouse & Wheel Events](#mouse--wheel-events)
      - [坐标](#坐标)
  - [内存与性能](#内存与性能)
  - [模拟事件](#模拟事件)

## 事件流

当你点击**按钮**, 你也点击了它的**容器**以及整个 html **页面**

事件流描述了页面接收事件的**顺序**

IE 支持**事件冒泡流**, Netscape 支持**事件捕获流**: 

- 事件冒泡: **从内往外**冒泡
  - 现代浏览器都支持冒泡, 事件会冒泡到 `window` 对象

- 事件捕获: **从外往内**捕获
  - 现代浏览器都支持捕获, 但旧版不支持, 因此特殊情况才会使用捕获

DOM 事件流

- DOM2 Events 规定事件流 3 阶段: 事件捕获, 到达目标, 事件冒泡
- 虽然规范规定**捕获阶段**不命中时间目标, 但现代浏览器都不遵循这个规定

## 事件处理程序

HTML

- 以HTML 属性来指定

DOM Level 0

- 把函数赋值给一个 DOM 元素的事件处理程序属性

DOM Level 2

- `addEventListener()`
  - 只能通过相同参数的 `removeEventListener` 移除
  - 匿名函数无法移除
- `removeEventListener()`

跨浏览器

- 通常使用 JavaScript 库

## 事件对象

在 DOM 合规的浏览器, `event` 对象是事件处理程序的唯一**参数**

事件处理程序内部, `this` 始终等于 `currentTarget`

```js
let btn = document.getElementById("myBtn");
btn.onclick = function(event) {
 console.log(event.currentTarget === this); // true
 console.log(event.target === this); // true
};

document.body.onclick = function(event) {
 console.log(event.currentTarget === document.body); // true
 console.log(this === document.body); // true
 console.log(event.target === document.getElementById("myBtn")); // true
};
```

| 属性              | 类型     | 说明                                          |
| ----------------- | -------- | --------------------------------------------- |
| type              | String   | 事件类型, 一般用于处理多个事件                |
| preventDefault()  | Function | 取消事件默认行为                              |
| stopPropagation() | Function | 取消事件捕获或事件冒泡                        |
| eventPhase        | Integer  | 1: 捕获阶段<br />2: 命中目标<br />3: 冒泡阶段 |

## 事件类型

DOM3 Events 定义了如下类型的事件: 

| Name             | 名称         | 说明                         |
| ---------------- | ------------ | ---------------------------- |
| UIEvent          | 用户界面事件 | 与 BOM 交互的通用浏览器事件  |
| FocusEvent       | 焦点事件     | 元素获得和失去焦点时触发     |
| MouseEvent       | 鼠标事件     | 鼠标在页面上执行操作时触发   |
| WheelEvent       | 滚轮事件     | 鼠标滚轮 (或类似设备) 时触发 |
| InputEvent       | 输入事件     | 输入文本时触发               |
| KeyboardEvent    | 键盘事件     | 键盘在页面上执行操作时触发   |
| CompositionEvent | 合成事件     | 使用某种 IME 输入字符时触发  |

### UI Events

任何在 `window` 上发生的事件, 都可以通过 `<body>` 元素对应属性赋值指定

`load` 事件在所有外部资源加载完成后触发

- 根据 DOM2 Events, `load` 应该在 `document` 上触发
- 为了向后兼容, 所有浏览器都在 `window` 上实现了 `load`

`resize` 在浏览器窗口的尺寸被改变时触发

### Mouse & Wheel Events

事件之间存在关系, 如触发一个 `dbclick` 事件, 会依次触发下列事件:

1. `mousedown`
2. `mouseup`
3. `click`
4. `mousedown`
5. `mouseup`
6. `click`
7. `dbclick`

DOM3 Event 定义了两个事件: `mouseenter`, `mouseleave`

- 不会冒泡, 也不会在光标经过后代元素时触发

#### 坐标

客户端坐标 (client)

- `event.clientX / Y` 保存了事件发生时光标在浏览器**视口**中的坐标

页面坐标 (page)

- 页面**没有**滚动时, 页面坐标等于客户端坐标
- `event.pageX / Y` 保存了事件发生时光标在 html **页面**中的坐标

屏幕坐标 (screen)

- `event.screenX / Y` 保存了事件发生时光标在显示器**屏幕**中的坐标

修饰键

- `Ctrl`, `Shift`, `Alt`, `Meta`
- windows 系统 `Meta` 键即 `win` 键

相关元素

- 一个事件可能会涉及多个元素
  - 如 `mouseover` 的目标是**获得光标**的元素, 相关目标是**失去光标**的元素

## 内存与性能

事件处理程序可以在 Web 应用中实现交互

- 在 C# 中, 通常会给每个按钮设置一个 onclick, 不会太多性能损耗
- 在 JavaScript 中, 事件处理程序的数量与页面整体性能**直接相关**

"过多事件处理程序" 的解决方案是使用**事件委托**

- 利用事件冒泡, 使用一个处理程序来管理一类事件
- 如 `click` 冒泡到 `document`, 即可为整个页面指定 `onclick`, 而不必为每个元素都指定
- 只要可行, 就应该只给 document 添加一个事件处理程序, 让它处理所有类型的事件

及时主动删除元素上的事件处理程序

## 模拟事件

事件就是为了表示网页中某个有意义的**时刻**

- 通常由用户交互或浏览器功能触发
- JavaScript 可以在任何时候触发任意事件, 会被当成浏览器创建的事件