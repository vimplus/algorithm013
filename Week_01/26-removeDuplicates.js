/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let last = nums[nums.length - 1];
    let n = nums.length;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === last) {
            nums.splice(i, 1);
        } else {
            last = nums[i];
        }
    }
    return nums.length;
};