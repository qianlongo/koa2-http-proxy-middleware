const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaBodyparser = require('koa-bodyparser')
const routes = require('./routes')
const httpProxy = require('../index')
const app = new Koa()
const PORT = 3000

app.use(koaBodyparser())
app.use(httpProxy({
  apiHost: '//card.fin.test.meituan.com'
}))
app.use(routes(KoaRouter))
app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})
