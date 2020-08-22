/**
 * 74. 搜索二维矩阵
 * https://leetcode-cn.com/problems/search-a-2d-matrix/
 * 时间复杂度分析：O(log(MN))
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if (!m) return false;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let pivotIdx = (left + right) >> 1;
        let row = Math.floor(pivotIdx / n);
        let col = pivotIdx % n;

        let pivotElement = matrix[row][col];
        if (pivotElement === target) return true;

        if (pivotElement <= target) {
            left = pivotIdx + 1;
        } else {
            right = pivotIdx - 1;
        }
    }
    return false;
};