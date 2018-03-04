const axios = require('axios')

axios({
  url: 'https://www.baidu.com/'
})
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
