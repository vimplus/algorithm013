/**
 * 51. N 皇后
 * https://leetcode-cn.com/problems/n-queens/
 * 时间复杂度：O(N!)
 * 
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];

    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');  // 创建一个充满“点”的棋盘
    }

    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {     // 之前的行
            for (let j = 0; j < n; j++) {   // 所有的列
                // 发现了皇后，并且和自己 同行 / 列 / 对角线
                if (board[i][j] == 'Q' && (j == col || i + j === row + col || i - j === row - col)) return false;   // 不是合法的选择
            }
        }
        return true;
    }

    const backtrack = (row) => {    // 放置当前行的皇后
        if (row == n) {  // 递归终止条件，超出了最后一行
            const stringBoard = board.slice();  // 拷贝一份board
            for (let i = 0; i < n; i++) {
                stringBoard[i] = stringBoard[i].join('');   // 将每一行拼成字符串
            }
            res.push(stringBoard);  // 完整解 推入res数组
            return;
        }

        for (let col = 0; col < n; col++) { // 枚举选择
            if (isValid(row, col)) {    // 剪掉无效的选择
                board[row][col] = 'Q';  // 做出选择，放置皇后
                backtrack(row + 1);     // 继续选择，往下递归
                board[row][col] = '.';  // 撤销当前选择
            }
        }
    }
    backtrack(0);   // 从第0行开始放置
    return res;
}
