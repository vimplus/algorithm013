/**
 * 53. 最大子序和
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 时间复杂度分析：O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0;
    let maxAns = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        maxAns = Math.max(pre, maxAns);
    }
    return maxAns;
};