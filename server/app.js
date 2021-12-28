const express = require("express");
const router = require("./router");

// 1 创建express应用
const app = express();

app.use("/", router);

// 中间件
const myLogger = function (req, res, next) {
  console.log("中间件被执行了");
  next();
};
app.use(myLogger);
// 2 监听 / 路径的get请求
app.get("/", function (req, res) {
  res.send("hello world");
});

// 3 使express监听5000端口号发起的http请求
app.listen(5000, function () {
  console.log("HTTP server is running...");
});

/* 
express三个基础概念
1. 中间件   --必须放在请求之前，而且必须要next(),否则不会向下执行

2. 路由

3.异常处理
一 参数一个不能少，否则会视为普通的中间件   --err, req, res, next
二 中间件需要在请求之后引用
*/
