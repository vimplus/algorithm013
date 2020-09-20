/**
 * 191. 位1的个数
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * 时间复杂度：O(1) - n 是一个 32 位数，常数项，所以是 O(1)
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n != 0) {
        count++;
        n = n & (n - 1);
    }
    return count;
};