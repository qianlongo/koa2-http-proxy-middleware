// let count = 0
module.exports = {
  async pages (ctx, next) {
    // http://localhost:3000/api/proxy/-/apply/getCitiesByProvince?userId=&token=&provinceId=220000&applyFlowNo=
    // const testData = await ctx.httpProxy({
    //   url: '/api/proxy/-/apply/getCitiesByProvince',
    //   params: {
    //     provinceId: '220000'
    //   }
    // })
    // console.log(JSON.stringify(testData))
    const data = await ctx.httpProxy()
    // console.log(data)
    ctx.body = data
  },
  async apis () {

  }
}
