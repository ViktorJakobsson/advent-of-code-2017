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
    console.log('part1', doCalculation(str))

    console.log('part2', doCalculation2(str))
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

function doCalculation2 (str) {
  return str.split('\n').filter(Boolean).map((row) => {
    return row.split('\t').reduce((memo, next, index, arr) => {
      if (memo) return memo

      return arr.reduce((memo2, next2, index2, arr2) => {
        if ((index === index2) || memo2) return memo2

        if ((next % next2) === 0) return next / next2
        if ((next2 % next) === 0) return next2 / next

        return memo2
      }, NaN)
    }, false)
  }).reduce((memo, next, index, arr) => {
    return memo + (next)
  }, 0)
}
