/**
 * 46. 全排列
 * https://leetcode-cn.com/problems/permutations/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    backtrack(nums, res, []);
    return res;
};

function backtrack(nums, res, tempList) {
    if (tempList.length === nums.length) {
        res.push(tempList.slice(0));
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (tempList.includes(nums[i])) continue;

        tempList.push(nums[i]);
        backtrack(nums, res, tempList);
        tempList.pop();
    }
}