/**
 * 22. 括号生成
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    generate(0, 0, n, '');

    function generate(left, right, n, s) {
        if (left === n && right === n) {
            res.push(s);
            return;
        }
        if (left < n) generate(left + 1, right, n, s + '(');
        if (right < left) generate(left, right + 1, n, s + ')');
    }
    return res;
};