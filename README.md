## koa2-http-proxy-middleware

> koa2请求转发中间件

## 用法

**初始化中间件**

``` javascript
const Koa = require('koa')
const app = new Koa()
const PORT = 3000
const koaBodyparser = require('koa-bodyparser')
const httpProxy = require('koa2-http-proxy-middleware')

// 因中间件中需要解析body中的参数，故先添加该中间件
app.use(koaBodyparser())
// apiHost即是你要转发请求到后端的host，其他的参数可以参考axioshttps://github.com/axios/axios
app.use(httpProxy({
  apiHost: 'xxx.yyy.com'
}))

app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})
```

**转发请求**

在你的路由controller中使用如下方法转发请求

``` javascript

async pages (ctx, next) {
  // 这里可以做一些请求之前需要处理的事情
  const data = await ctx.httpProxy()
  // 这里可以做一些请求之后需要处理的事情
  ctx.body = data
}


```

