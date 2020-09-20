/**
 * 231. 2的幂
 * https://leetcode-cn.com/problems/power-of-two/
 * 方法一：取模
 * 时间复杂度：O(logN)
 * 
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 0) return false;
    while (n % 2 == 0) {
        n = n / 2;
    }
    return n == 1;
};

/**
 * 方法二：位运算
 * 时间复杂度：O(1)
 * 
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n-1)) == 0;
};