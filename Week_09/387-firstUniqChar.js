/**
 * 387. 字符串中的第一个唯一字符
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 时间复杂度：O(n)
 * 
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let n = s.length;
    let hash = {};
    let result = new Map();
    for (let i = 0; i < n; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1;
            result.set(s[i], i);
        } else {
            result.delete(s[i]);
        }
    }
    if (result.size === 0) return -1;
    return result.values().next().value;
};