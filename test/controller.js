// let count = 0
module.exports = {
  async pages (ctx, next) {
    const { callback } = ctx.query
    const data = await ctx.httpProxy()

    if (callback) {
      ctx.type = 'application/x-javascript; chartset=utf-8'
      ctx.body = `${callback}(${JSON.stringify(data)})`
    } else {
      ctx.body = data
    }
  }
}
