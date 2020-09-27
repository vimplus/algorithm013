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

#### [不同路径2](https://leetcode-cn.com/problems/path-sum-ii/)

##### 方法一（动态规划 - 从 起点 往 终点 递推）：
* 思路: 先假设只有2x2的网格，那么起始点（左上角）到达终点（右下角）的方式只有2种（往右和往下），我们可以发现右下角的路径等于右上角和左下角的路径情况相加。

    > 假设当前`dp[i][j]`是终点（右下角）那个格子，由此我们推导出状态转移方程：`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]`;

* 步骤：
    - 1.初始化二维DP, 将第一行和第一列的路径情况都初始化为1（因为从起点到这些格子只有一种情况，要么都是往右，要么都是往下到达），具体还需要根据是否有障碍物进行判断；
    - 2.根据状态转移方程进行递推，具体需要根据是否有障碍物进行判断，如果有障碍物，我们直接对该格子置为0。
    - 3.整个二维DP网格遍历完了之后，在`dp[m - 1][n - 1]`便可获得我们想要的结果。

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

##### 方法二（动态规划 - 从 终点 往 起点 递推）：
* 思路: 先假设只有2x2的网格，那么终点临近的`上/左`两个网格都只有 1 种方式可以到达（往下/往右），终点斜对角的那个网格（左上角）到达终点（右下角）的方式只有2种（先往右再往下和先往下再往右），我们可以发现终点左上角的路径情况等于右上角和左下角的路径相加。

    > 假设当前`dp[i][j]`是终点左上角那个格子，由此我们推导出状态转移方程：`dp[i][j] = dp[i + 1][j] + dp[i][j + 1];`;

* 步骤：
    - 1.初始化二维DP, 将最底下一行和最右侧一列的路径情况都初始化为1（因为这些格子到达终点只有一种情况，要么都是往右，要么都是往下到达），具体还需要根据是否有障碍物进行判断；
    - 2.根据状态转移方程进行递推，具体需要根据是否有障碍物进行判断，如果有障碍物，我们直接对该格子置为0。
    - 3.整个二维DP网格遍历完了之后，在`dp[0][0]`便可获得我们想要的结果。

* 实现代码：

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from(new Array(m), () => new Array(n));
    // 1 ^ 1 === 0; 1 ^ 0 === 1 相当于 Number(!obstacleGrid[m - 1][n - 1])
    dp[m - 1][n - 1] = 1 ^ (obstacleGrid[m - 1][n - 1]);

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
通过遍历，逐个比较每一个字符串。

#### Rabin-Karp算法
为了避免逐个字符对目标字符串和子串进行比较，我们可以尝试一次性判断两者是否相等。
因为，我们需要一个好的哈希函数（hash function）。通过哈希函数，我们可以算出子串的哈希值，然后将它和目标字符串中的子串的哈希值进行比较。这个方法在速度上比暴力法有显著提升。

##### Rabin-Karp算法的思想
* 1.假设子串的长度为 M(pat)，目标字符串的长度为 N(txt);
* 2.计算子串的 hash 值 `hash_pat`;
* 3.计算目标字符串txt中每个长度为 M 的子串的 hash 值（共需要计算 N-M+1 次）；
* 4.比较 hash 值：如果hash值不同，字符串必然不匹配；如果 hash 值相同，还需要通过朴素算法再次判断。

#### KPM算法
KPM算法（Knuth-Morris-Pratt）的思想是：
当子串与目标字符串不匹配时，其实你已经知道了前面已经匹配成功那一部分的字符（包括子串与目标字符串）。

以阮一峰的文章为例，当空格与D不匹配时，你其实知道前面6个字符是“ABCDAB”。KMP算法的想法是：
> 设法利用这个已知信息，不要把“搜索位置”移回已经比较过的位置，而是继续把指针向后移，这样就提高了效率。

参考链接：
* [KMP字符串匹配算法1](https://www.bilibili.com/video/av11866460?from=search&seid=17425875345653862171)
* [字符串匹配的KMP算法](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)

#### 马拉车算法（了解即可）- Manacher's Algorithm 
马拉车算法是用来 查找一个字符串的最长回文子串的线性方法 ，由一个叫 Manacher 的人在 1975 年发明的，这个方法的牛逼之处在于将时间复杂度提升到了 线性 。

Manacher 算法本质上还是 中心扩散法 ，只不过它使用了类似 KMP 算法的技巧，充分挖掘了已经进行回文判定的子串的特点，提高算法的效率。

参考链接：
* [老司机开车，教会女朋友什么是「马拉车算法」](https://www.cxyxiaowu.com/2665.html)