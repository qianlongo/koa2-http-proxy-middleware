const axios = require('./axios')
/**
 * @param  {} opts 参数配置可以参考https://github.com/axios/axios
 */
module.exports = (ctx, opts) => {
  ctx.httpProxy = (params = {}) => {
    params = Object.assign({}, { host: opts.apiHost }, params)

    let reqParams = Object.assign(
      {},
      params,
      formatReqParams(ctx, params)
    )

    if (reqParams.method.toUpperCase() !== 'GET') {
      console.log(ctx.request.body)
      reqParams.data = params.data || ctx.request.body
    }

    delete reqParams.headers.host
    return (
      axios(reqParams)
        .then((res) => {
          let { data, headers } = res

          setResCookies(ctx, headers)

          return data
        })
        .catch((err) => {
          // TODO
          // console.log(err)
          return err
        })
    )
  }
}

function setResCookies (ctx, headers) {
  let resCookies = headers['set-cookie']

  if (
    !headers ||
    !resCookies ||
    !resCookies.length ||
    resCookies.length <= 0 ||
    !resCookies[0]
  ) {
    return
  }

  ctx.res._headers = ctx.res._headers || {}
  ctx.res._headerNames = ctx.res._headerNames || {}

  ctx.res._headers['set-cookie'] = ctx.res._headers['set-cookie'] || []
  ctx.res._headers['set-cookie'] = ctx.res._headers['set-cookie'].concat(
    resCookies
  )

  ctx.res._headerNames['set-cookie'] = 'set-cookie'
}

/**
 * @param  {} ctx koa当前执行上下文
 * @param  {} params 请求参数
 */
function formatReqParams (ctx, params) {
  let { url, method, headers, protocol } = ctx
  let { host } = params
  let hasProtocol = /(http|s):\/\//

  url = params.url || url
  method = params.method || method
  protocol = (hasProtocol.test(url)) ? url.split(':')[0] : (params.protocol || protocol)
  headers = Object.assign({}, headers, params.headers, { 'content-type': params['content-type'] || headers['content-type'] || 'application/x-www-form-urlencoded' })
  url = `${protocol}://${host}${url}`

  delete params.host

  return { url, method, protocol, headers }
}
