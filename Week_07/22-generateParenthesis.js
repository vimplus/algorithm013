/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    function generate(left, right, s) {
        // 终止条件：如果左右括弧都用完则结束
        if (left === n && right === n) {
            res.push(s);
            return;
        }
        // 如果左括弧未用完则继续增加左括弧
        if (left < n) generate(left + 1, right, s + '(');
        // 如果右括弧少于左括弧则继续增加右括弧
        if (right < left) generate(left, right + 1, s + ')');
    }
    
    generate(0, 0, '');

    return res;
};