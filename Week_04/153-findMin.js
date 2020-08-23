/**
 * 153. 寻找旋转排序数组中的最小值
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length;
    if (!n) return -1;
    if (n === 1) return nums[0];

    let left = 0;
    let right = n - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] < nums[right]) {
            // mid 可能是最小值
            right = mid;
        } else {
            // mid 肯定不是最小值
            left = mid + 1;
        }
    }
    return nums[left];
};