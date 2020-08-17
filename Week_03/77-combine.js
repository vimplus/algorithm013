/**
 * 77. 组合
 * https://leetcode-cn.com/problems/combinations/
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];

    function combineSub(start, subresult) {
        if (subresult.length === k) {
            res.push(subresult.slice(0));
            return;
        }

        for (let i = start; i <= n; i++) {
            subresult.push(i);
            combineSub(i + 1, subresult);
            subresult.pop();
        }
    }
    
    combineSub(1, []);
    return res;
};