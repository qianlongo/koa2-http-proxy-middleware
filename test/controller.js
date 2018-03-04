// let count = 0
module.exports = {
  async cardDetail (ctx, next) {
    const data = await ctx.httpProxy()
    // console.log(data)
    ctx.body = data
  }
}
