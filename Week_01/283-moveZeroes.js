/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length = nums.length;
    let j = 0;
    for (let i = 0; i < length - j; i++) {
        if(nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
            i--;
            j++;
        }
    }
    return nums;
};