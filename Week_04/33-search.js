/**
 * 33. 搜索旋转排序数组
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 时间复杂度分析：O(logN)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    if (!n) return -1;
    if (n === 1) return nums[0] === target ? 0 : -1;

    let left = 0;
    let right = n - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) return mid;
        
        if (nums[0] <= nums[mid]) {  // 如果 [left, mid - 1] 是有序数组
            if (nums[0] <= target && target < nums[mid]) {
                // 且满足 nums[l] <= target < nums[mid]
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {  // 如果 [mid, r] 是有序数组
            if (nums[mid] < target && target <= nums[n-1]) {
                // 且满足 nums[mid] < target <= nums[n-1]
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};