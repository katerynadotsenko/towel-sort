// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) return [];
    let newMatrix = [];
    matrix.forEach((array, i) => {
        (i + 1) % 2 !== 0 ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);
        newMatrix.push(...array);
    })
    return newMatrix;
}
