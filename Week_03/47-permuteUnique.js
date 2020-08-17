/**
 * 47. 全排列 II
 * https://leetcode-cn.com/problems/permutations-ii/
 * 
 * 时间复杂度分析：O(N*N!)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let n = nums.length;
    // 排序（升序/降序都可以），为了剪枝方便
    nums.sort((a, b) => a - b);
    let res = [];
    let hash = {};
    
    function backtrack(tempList) {
        if (tempList.length === n) {
            res.push([...tempList]);
            return;
        }
    
        for (let i = 0; i < nums.length; i++) {
            // 剪枝条件：
            // i > 0 是为了保证 nums[i - 1] 有意义；
            // !hash[i-1] 是因为 hash[i-1] 在回退的过程中被撤下了选择
            if (hash[i] || i > 0 && !hash[i-1] && nums[i-1] === nums[i]) continue;

            hash[i] = true;
    
            tempList.push(nums[i]);
            backtrack(tempList);
            tempList.pop();

            hash[i] = false;
        }
    }
    backtrack([]);
    return res;
};