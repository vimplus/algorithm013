/**
 * 72. 编辑距离
 * https://leetcode-cn.com/problems/edit-distance/
 * 时间复杂度分析：O(nm)
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (word1 === word2) return 0;
    let n = word1.length;
    let m = word2.length;
    if (!n || !m) return n || m;

    let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }
    return dp[n][m];
};