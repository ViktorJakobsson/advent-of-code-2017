var http = require('http')

var options = {
  host: 'adventofcode.com',
  path: '/2017/day/4/input',
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
    console.log('part1', doCalculation(str))

    console.log('part2', doCalculation2(str))
  })
}).end()

function doCalculation (str) {
  return str.split('\n').filter(Boolean).map((val) => {
    return /(\b\w+\b).*(\b\1\b)/.test(val)
  }).reduce((memo, next) => {
    return next ? memo : memo + 1
  }, 0)
}

function doCalculation2 (str) {
  return str.split('\n').filter(Boolean).map((val) => {

  })
}