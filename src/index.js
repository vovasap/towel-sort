
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) return []
    return matrix.map((arr, i) => i % 2 === 0 ? arr : arr.reverse()).flat()
}
