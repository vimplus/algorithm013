/**
 * 529. 扫雷游戏
 * https://leetcode-cn.com/problems/minesweeper/
 * 时间复杂度分析：O(MN)
 * 
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    // let dirX = [0, 1, 0, -1, 1, 1, -1, -1];
    // let dirY = [1, 0, -1, 0, 1, -1, 1, -1];

    const dirX = [1, 1, 1, -1, -1, -1, 0, 0];
    const dirY = [1, 0, -1, 0, 1, -1, 1, -1];

    let n = board.length;
    let m = board[0].length;
    let inBoard = (x, y) => x >= 0 && y >= 0 && x < n && y < m;  // 辅助函数

    function update(board, x, y) {
        if (!inBoard(x, y) || board[x][y] != 'E') return;  // 不在界内或不是E，直接返回

        let count = 0;
        // 统计周围雷的个数
        for (let i = 0; i < 8; i++) {
            const mX = x + dirX[i];
            const mY = y + dirY[i];
            if (inBoard(mX, mY) && board[mX][mY] === 'M') count++;
        }

        if (count === 0) {  // 规则 2: 如果周围没有雷，标记B，递归周围的点
            board[x][y] = 'B';
            // 并且所有和其相邻的未挖出方块都应该被递归地揭露。
            for (let i = 0; i < 8; i++) {
                update(board, x + dirX[i], y + dirY[i]);
            }
        } else {
            // 规则 3: 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
            board[x][y] = `${count}`;
        }
    }

    let [x, y] = click;
    if (board[x][y] === 'M') {
        board[x][y] = 'X';  // 规则 1: 如果一个地雷（'M'）被挖出，游戏就结束了，把它改为 'X'。
    } else {
        update(board, x, y);
    }

    return board;
};