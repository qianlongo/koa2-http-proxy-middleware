
const httpProxy = require('./lib/httpProxy')
/**
 * @param  {} opts 初始化参数配置,比如apiHost(自定义的)，其他参数配置可以参考https://github.com/axios/axios
 */
module.exports = (opts = {}) => {
  return (ctx, next) => {
    if (!ctx.httpProxy) {
      httpProxy(ctx, opts)
    }

    return next()
  }
}
