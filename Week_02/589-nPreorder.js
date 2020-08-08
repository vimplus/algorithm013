/**
 * 589. N叉树的前序遍历
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var res = [];
    function traversal(root){
        if (!root) return;
        res.push(root.val);
        for(var i = 0; i < root.children.length; i++){
            traversal(root.children[i]);
        }
    }
    traversal(root);
    return res;
};