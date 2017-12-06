var http = require('http')

var options = {
  host: 'adventofcode.com',
  path: '/2017/day/2/input',
  headers: {
    Cookie: ''
  }
}

http.request(options, (response) => {
  var str = ''
  response.on('data', (data) => {
    str += data
  })

  response.on('end', () => {
    console.log(doCalculation(str))
  })
}).end()

function doCalculation (str) {
  return str.split('\n').filter(Boolean).map((rows) => {
    return rows.split('\t').reduce((memo, next, index, arr) => {
      return {
        min: Math.min(memo.min, next),
        max: Math.max(memo.max, next)
      }
    }, { min: Infinity, max: -Infinity })
  }).reduce((memo, next, index, arr) => {
    return memo + (next.max - next.min)
  }, 0)
}
