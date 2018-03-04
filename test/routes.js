const koaCompose = require('koa-compose')
const {
  cardDetail
} = require('./controller')

module.exports = (Router) => {
  const router = new Router()

  router.get('/apply/cardDetail', cardDetail)

  return koaCompose([router.routes(), router.allowedMethods()])
}
