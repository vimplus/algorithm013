/**
 * https://leetcode-cn.com/problems/longest-valid-parentheses/
 * 32. 最长有效括号
 * 时间复杂度：O(n)
 * 
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLen = 0;
    let n = s.length;
    if (!n) return maxLen;
    let dp = new Array(n).fill(0);

    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                if (i - 2 >= 0) {
                    dp[i] = dp[i - 2] + 2;
                } else {
                    dp[i] = 2;
                }
            } else if (s[i - dp[i - 1] - 1] === '(') {
                if (i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
                } else {
                    dp[i] = dp[i - 1] + 2;
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};