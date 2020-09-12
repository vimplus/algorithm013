/**
 * 36. 有效的数独
 * https://leetcode-cn.com/problems/valid-sudoku/
 * 时间复杂度：O(1) 因为这是确定的常量：81 (9 * 9) 个单元格。
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 三个方向记录
    let rows = {};
    let cols = {};
    let boxes = {};

    // 遍历数独
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            // 子数独序号
            let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3);
            if (num != '.') {
                if (rows[`${i}-${num}`] || cols[`${j}-${num}`] || boxes[`${boxIndex}-${num}`]) return false;

                // 以各自方向 + 不能出现重复的数字 组成唯一键值，若出现第二次，即为重复
                rows[`${i}-${num}`] = true;
                cols[`${j}-${num}`] = true;
                boxes[`${boxIndex}-${num}`] = true;
            }
        }
    }
    return true;
};