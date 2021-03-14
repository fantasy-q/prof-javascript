# 第 12 章 浏览器对象模型

ECMAScript 把浏览器对象模型描述为 JavaScript 的核心

- 实际上 BOM 是使用 JavaScript 开发 Web 应用程序的核心

## 目录

- [第 12 章 浏览器对象模型](#第-12-章-浏览器对象模型)
  - [目录](#目录)
  - [window 对象](#window-对象)
  - [location 对象](#location-对象)
  - [navigator 对象](#navigator-对象)

## window 对象

BOM 的核心是 window 对象, 表示浏览器实例

- ECMAScript 的 Global 对象, 浏览器窗口的 JavaScript 接口

Global 作用域

- 通过 `var` 声明的全局变量和函数, 都会成为 window 对象的属性和方法

窗口位置与像素比

- `moveTo` 绝对坐标, `moveBy` 相对坐标
- 像素比: 物理像素与逻辑像素之分

窗口大小

- 浏览器**自身**的尺寸 (outer) 与浏览器**视口** (inner) 的尺寸
- 移动设备的视口 
  -  This is recommended reading if you’re developing for mobile devices.
  - http://quirksmode.org/mobile/viewports2.html

导航与弹窗

定时器

- JavaScript 在浏览器中是单线程执行的

- 可以使用定时器指定**某个时间后**或**每隔一段时间**执行代码

`setTimeout()`

- 接收 2 个参数: 执行的代码, 执行前的等待的毫秒数

`setInterval()`

- 接收 2 个参数: 执行的代码, 向队列添加新任务前等待的毫秒数
  - 浏览器不关心代码什么时候执行或执行所需时间
  - 因此该函数适合执行时间短, 非阻塞的回调函数
  - 在生产环境中很少使用, 因为无法保证任务之间的时间间隔

系统对话框

- alert, confirm, prompt

## location 对象

`location` 既是 `window` 也是 `document` 的属性

- 即 `window.location === document.location`

假设 URL 为 `http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents`

| 属性名            | 返回值                                                   | 描述                                                         |
| ----------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| location.hash     | "#contents"                                              | **URL hash**<br /> (the pound sign followed by zero or more characters), or an empty string if the URL doesn’t have a hash. |
| location.host     | "www.wrox.com:80"                                        | **服务器名** and **端口号** if present.                      |
| location.hostname | "www.wrox.com"                                           | The **服务器名** without the port number.                    |
| location.href     | "http://www.wrox.com:80/WileyCDA/?q=javascript#contents" | **完整 URL** of the currently loaded page.<br />The toString() method of location returns this value. |
| location.pathname | "/WileyCDA/"                                             | **目录名** and/or **文件名** of the URL.                     |
| location.port     | "80"                                                     | The **端口** of the request if specified in the URL. <br />If a URL does not contain a port, then this property returns an empty string. |
| location.protocol | "http:"                                                  | **协议** used by the page.<br />Typically "http:" or "https:". |
| location.search   | "?q=javascript"                                          | **查询字符串** of the URL. It returns a string beginning with a question mark. |
| location.username | "foouser"                                                | **用户名** specified before the domain name.                 |
| location.password | "barpassword"                                            | **密码** specified before the domain name.                   |
| location.origin   | “http://www.wrox.com“                                    | **源** of the URL. Read only.                                |

查询字符串

`location.search` 返回从 `?` 开始之后的所有内容

## navigator 对象