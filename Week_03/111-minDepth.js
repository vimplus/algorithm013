/**
 * 111. 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * 
 * 时间复杂度分析：O(N)
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    if (root.left == null && root.right == null) return 1;

    let ans = Number.MAX_SAFE_INTEGER;
    if (root.left !== null) {
        ans = Math.min(minDepth(root.left), ans)
    }

    if (root.right !== null) {
        ans = Math.min(minDepth(root.right), ans)
    }
    return ans + 1;
};