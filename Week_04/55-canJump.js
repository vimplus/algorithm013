/**
 * 55. 跳跃游戏
 * https://leetcode-cn.com/problems/jump-game/
 * 时间复杂度分析：O(N)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let rightmost = 0;
    for (let i = 0; i < n; i++) {
        if (i > rightmost) return false;
        rightmost = Math.max(rightmost, i + nums[i]);
    }
    return true;
};