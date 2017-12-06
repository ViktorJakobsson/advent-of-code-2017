// 37 36  35  34  33  32 31
// 38 17  16  15  14  13 30
// 39 18   5   4   3  12 29
// 40 19   6   1   2  11 28
// 41 20   7   8   9  10 27
// 42 21  22  23  24  25 26
// 43 44  45  46  47  48 49
//  3  2   1   0   1  2  3

var max = 325489
var gridSize = Math.ceil(Math.sqrt(max))
if (gridSize % 2 === 0) gridSize++

var stepsToMiddle = Math.floor(gridSize / 2)

var a1 = stepsToMiddle + Math.pow(gridSize, 2) - (gridSize - 1) * 4
var a2 = stepsToMiddle + Math.pow(gridSize, 2) - (gridSize - 1) * 3
var a3 = stepsToMiddle + Math.pow(gridSize, 2) - (gridSize - 1) * 2
var a4 = stepsToMiddle + Math.pow(gridSize, 2) - (gridSize - 1) * 1

var closestStep = Math.min(Math.abs(max - a1), Math.abs(max - a2), Math.abs(max - a3), Math.abs(max - a4))
console.log(closestStep, stepsToMiddle, `from ${max}:`, closestStep + stepsToMiddle)
