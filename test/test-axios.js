const axios = require('axios')

axios({
  url: 'http://card.meituan.com/apply/personalInfo'
})
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
