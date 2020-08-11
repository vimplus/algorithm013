/**
 * 时间复杂度分析：O(n)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 基于递归的遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    
    function helper(node) {
        if (!node) return;
        helper(node.left);
        result.push(node.val);
        helper(node.right);
    }
    helper(root);
    return result;
};


// 基于栈的遍历
var inorderTraversal = function(root) {
    let stack = [];
    let result = [];
    let curr = root;
    while (curr !== null || stack.length) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
};