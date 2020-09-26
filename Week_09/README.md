# 学习笔记

## 高级动态规划

### 感触
* 1.人肉递归低效、很累 ==> 推荐：**画出递归状态树**
* 2.找到最近最简方法，将其拆解成可重复解决的问题
* 3.数学归纳法思维

> 本质：寻找重复性 --> 计算机指令集

### 关键点
**动态规划** 和 **递归或者分治** 没有根本上的区别（关键看有无最优的子结构） 

* 拥有共性：找到重复子问题
* 差异性：最优子结构、中途可以淘汰次优解

### 复杂度来源
* 1.状态拥有更多维度（二维、三维、或者更多、甚至需要压缩）
* 2.状态方程更加复杂

> 本质：内功、逻辑思维、数学

### DP 递推模板

```javascript
function DP() {
    let dp = [][]; // 二维情况 
    for i = 0 .. M { 
        for j = 0 .. N { 
            dp[i][j] = _Function(dp[i][j]…) 
        }
    }
    return dp[M][N];
} 
```

### 例题分析

#### 不同路径2

##### 方法一（动态规划 - 从起点往终点递推）：
* 思路: 先假设只有2x2的网格，那么起始点（左上角）到达终点（右下角）的方式只有2种（往右和往下），我们可以发现右下角的步数等于右上角和左下角的步数相加。假设当前`dp[i][j]`是终点（右下角）那个格子，由此我们推导出状态转移方程：`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]`;

* 步骤：
    - 1.初始化二维DP, 将第一行和第一列的路径情况都初始化为1（因为从起点到这些格子只有一种情况，要么都是往右，要么都是往下到达），具体还需要根据是否有障碍物进行判断；
    - 2.根据状态转移方程进行递推，具体需要根据是否有障碍物进行判断，如果有障碍物，我们直接对该格子置为0。

* 实现代码：

```javascript
const uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let dp = Array.from(new Array(m), () => new Array(n));
    dp[0][0] = 1;

    // 填充第一列
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
    }

    // 填充第一行
    for (let j = 1; j < n; j++) {
        dp[0][j] = obstacleGrid[0][j] === 1 || dp[0][j - 1] === 0 ? 0 : 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            } else {
                // 有障碍物，置为 0
                dp[i][j] = 0;
            }
        }
    }
    return dp[m - 1][n - 1];
}
```

##### 方法二（动态规划 - 从终点往起点递推）：
* 思路: 先假设只有2x2的网格，那么终点临近的上下两个网格都只有一种方式可以到达（往下或往右），终点斜对角的那个网格（左上角）到达终点（右下角）的方式只有2种（往右和往下），我们可以发现终点左上角的步数等于右上角和左下角的步数相加。假设当前`dp[i][j]`是终点左上角那个格子，由此我们推导出状态转移方程：`dp[i][j] = dp[i + 1][j] + dp[i][j + 1];`;

* 步骤：
    - 1.初始化二维DP, 将最底下一行和最右侧一列的路径情况都初始化为1（因为这些格子到达终点只有一种情况，要么都是往右，要么都是往下到达），具体还需要根据是否有障碍物进行判断；
    - 2.根据状态转移方程进行递推，具体需要根据是否有障碍物进行判断，如果有障碍物，我们直接对该格子置为0。

* 实现代码：

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from(new Array(m), () => new Array(n));
    dp[m - 1][n - 1] = 1 ^ (obstacleGrid[m - 1][n - 1]);    // 1 ^ 1 === 0; 1 ^ 0 === 1 相当于 Number(!obstacleGrid[m - 1][n - 1])

    // 初始化最右边一列
    for (let i = m - 2; i >= 0; i--) {
        dp[i][n - 1] = obstacleGrid[i][n - 1] === 1 || dp[i + 1][n - 1] === 0 ? 0 : 1;
    }

    // 初始化最底下一行
    for (let j = n - 2; j >= 0; j--) {
        dp[m - 1][j] = obstacleGrid[m - 1][j] === 1 || dp[m - 1][j + 1] === 0 ? 0 : 1;
    }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return dp[0][0];
};
```


## 字符串

### 字符串定义

```javascript
let str = 'abc';
```

### 字符串遍历

```javascript
for (let i = 0; i < str.length; i++) {
    let s = str[i];
    // or
    let s = str.charAt(i);
}
```

### 字符串比较

```javascript
let x = 'abc';
let y = 'abc';
x === y;    // true
```


### 字符串匹配算法

#### 暴力法


#### Rabin-Karp算法


#### KPM算法


#### 马拉车算法（了解即可）

