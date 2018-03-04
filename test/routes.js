const koaCompose = require('koa-compose')
const {
  pages
} = require('./controller')

module.exports = (Router) => {
  const router = new Router()

  router.all('/*', pages)

  return koaCompose([router.routes(), router.allowedMethods()])
}
