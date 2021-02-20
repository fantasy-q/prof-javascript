# 第 23 章 网络请求与远程资源

2005 年, Jesse James Garrett 撰写了一篇题为 “Ajax: A New Approach to Web Applications” 的文章

这个技术涉及发送服务器请求而**不刷新页面**, 从而实现更好的用户体验

## 目录

- [第 23 章 网络请求与远程资源](#第-23-章-网络请求与远程资源)
  - [目录](#目录)
  - [XMLHttpRequest 对象](#xmlhttprequest-对象)
    - [使用 XHR](#使用-xhr)
    - [HTTP 首部](#http-首部)
    - [请求类型](#请求类型)
    - [XMLHttpRequest Level 2](#xmlhttprequest-level-2)
  - [进度事件](#进度事件)
  - [跨源资源共享](#跨源资源共享)
  - [替代性跨源技术](#替代性跨源技术)
  - [Fetch API](#fetch-api)
  - [Beacon API](#beacon-api)
  - [Web Socket](#web-socket)
  - [安全](#安全)

## XMLHttpRequest 对象

把 `Ajax` 推到历史舞台的关键是 `XMLHttpRequest` (XHR) 对象

- 最早由微软发明, 然后被其他浏览器借鉴
- `XMLHttpRequest` 已经是**过时**的产物, 实际开发使用 `fetch()`

### 使用 XHR

```js
let xhr = new XMLHttpRequest();
// readyState 值变化, 触发 onreadystatechange
xhr.onreadystatechange = function() {
  /** readyState  
   * 0: Uninitialized -- !open()
   * 1: Open ----------- !send()
   * 2: Sent ----------- !Response
   * 3: receiving ------ !Complete
   * 4: Complete ------- data available
   */
  if (xhr.readyState == 4) {
    // 检查 status 确保相应成功
    // 2xx 成功; 304 资源未修改直接浏览器缓存拿取
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      alert(xhr.responseText);
    } else {
      alert("Request was unsuccessful: " + xhr.status);
    }
  }
};
// 使用 XHR 请求准备
// 同源 URL: 域名, 端口, 协议, 否则报错
xhr.open("get", "example.txt", true);
// 发送数据
xhr.send(null);
// 取消请求
xhr.abort();
```

### HTTP 首部
- Accept—The content types that the browser can handle.
- Accept-Charset—The character sets that the browser can display.
- Accept-Encoding—The compression encodings handled by the browser.
- Accept-Language—The languages the browser is running in.
- Connection—The type of connection the browser is making with the server.
- Cookie—Any cookies set on the page.
- Host—The domain of the page making the request.
- Referer—The URI of the page making the request. 
  - 这个单词在规范中拼写错了, 为了兼容以前的错误, 将错就错
- User-Agent—The browser’s user-agent string.

### 请求类型

GET

- 向服务器查询信息
- **查询字符串**必须使用 `encodeURIComponent()`

POST

- 向服务器发送要保存的数据

### XMLHttpRequest Level 2

进一步发展 XHR

- `FormData` 类型
- `timeout` 属性
- `overrideMimeType()` 方法

## 进度事件

这些事件最初只针对 XHR, 现在推广到了其他类似的 API

- loadstart—Fires when the first byte of the response has been received.
- **progress**—Fires repeatedly as a response is being received.
- error—Fires when there was an error attempting the request.
- abort—Fires when the connection was terminated by calling abort().
- **load**—Fires when the response has been fully received.
- loadend—Fires when the communication is complete and after firing error,
abort, or load.

主要说明以下两个事件: 

- `load` 事件

- `process` 事件

## 跨源资源共享

XHR 默认只能访问与**发起请求的页面**在同一个域的资源

- 这个安全策略可以阻止恶意行为
- 浏览器需要合法跨源的能力

跨源资源共享 (CORS)

- 基本思路是使用**自定义首部**允许浏览器服务器相互了解

## 替代性跨源技术

## Fetch API

## Beacon API

## Web Socket

## 安全