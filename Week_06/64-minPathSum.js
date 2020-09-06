/**
 * 64. 最小路径和
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * 时间复杂度分析：O(nm)
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) return 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let dp = Array.from(new Array(rows), () => new Array(cols));

    dp[0][0] = grid[0][0];

    for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    for (let j = 1; j < cols; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    return dp[rows - 1][cols - 1];
};