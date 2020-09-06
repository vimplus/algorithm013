/**
 * 647. 回文子串
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * 时间复杂度分析：O(n^2)
 * 
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    let count = 0;
    let n = s.length;

    for (let i = 0; i < 2 * n - 1; i++) {
        let start = Math.floor(i / 2);
        let end = Math.floor(i / 2) + i % 2;
        while (start >= 0 && end < n && s[start] === s[end]) {
            start--;
            end++;
            count++;
        }
    }
    return count;
};