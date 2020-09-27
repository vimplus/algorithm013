/**
 * 557. 反转字符串中的单词 III
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * 时间复杂度：O(n)
 * 
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let n = s.length;
    if (!n) return s;
    let result = '';
    let word = '';

    for (let i = n - 1; i >= 0; i--) {
        let char = s[i];
        if (char === ' ' && word.length) {
            result = word + ' ' + result;
            word = '';
        } else {
            word += s[i];
        }
    }
    return (word.length ? word + ' ' + result : result).trim();
};