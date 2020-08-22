# 学习笔记

## 深度优先搜索与广度优先搜索

### 搜索（遍历）

* 每个节点都要访问一次；
* 每个节点仅仅只访问一次；
* 对节点的访问顺序不限，根据访问的顺序不同，分为：
    - 深度优先搜索(DFS)：depth first search
    - 广度优先搜索(BFS)：breath first search

### 遍历顺序

![BFS-DFS](https://thinktxt.static.lxyour.com/note/BFS-DFS.png)

* 广度优先：一层一层的往下递推，每到一层从左往右访问完所有节点之后再继续往下推进，直到访问所有节点。
* 深度优先：沿着某一节点一步一步下探到底部，然后再返回到起点沿着另一边节点继续下探到底部，如此循环，直到访问过所有节点。

### 实现方式
* 深度优先搜索(DFS)：借助一个栈；
* 广度优先搜索(BFS)：借助一个队列；

#### 深度优先搜索模板

```javascript
/**
 * DFS - JS递归实现
 * @param {*} node 
 */
function search(root) {
    let visited = new Set();

    function dfs(root) {
        if (visited.has(root)) return;
        
        visited.add(root);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(node);
    return visited;
}

/**
 * DFS - JS非递归实现（借助栈）
 * @param {*} node 
 */
function dfs(root) {
    if (!root) return;
    let visited = new Set();
    let stack = [root];

    while (stack.length) {
        let currNode = stack.pop();
        if (visited.has(currNode)) continue;

        visited.add(currNode);
        if (currNode.right) stack.push(currNode.right);
        if (currNode.left) stack.push(currNode.left);
    }
    return visited;
}
```

#### 广度优先搜索模板

```javascript
/**
 * BFS - JS实现（借助队列）
 * @param {*} node 
 */
function bfs(root) {
    let result = [];
    let queue = [root];

    while (queue.length) {
        let level = [];
        let n = queue.length;

        for (let i = 0; i < n; i++) {
            const currrNode = queue.pop();
            level.push(currrNode.val);

            if (currrNode.left) queue.unshift(currrNode.left);
            if (currrNode.right) queue.unshift(currrNode.right);
        }
        result.push(level);
    }
    return result;
}
```

## 贪心算法（Greedy）
贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或者最优的算法。
**贪心算法**与**动态规划**的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。

### 特征
简单地说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解称为**最优子结构**。

* 贪心：当下做局部最优判断（不能回退）；
* 回溯：能够回退；
* 动态规划：最优判断 + 回退；

### 使用场景

贪心法可以解决一些最优化问题，如：求图中的最小生成树、求哈夫曼编码等。然而对于工程和生活中的问题，贪心法一般不能得到我们所要求的答案。 
一旦一个问题可以通过贪心法来解决，那么贪心法一般是解决这个问题的最好办法。由于贪心法的高效性以及其所求得的答案比较接近最优结果，贪心法也可以用作**辅助算法**或者**直接解决一些要求结果不特别精确的问题**。


## 二分查找
二分查找（Binary Search）算法，也叫折半查找算法。
二分查找底层依赖的是数组，除了数据本身之外，不需要额外存储其他信息，是**最省内存空间的存储方式**。

二分查找的核心思想理解起来非常简单，有点类似分治思想。即每次都通过跟区间中的中间元素对比，将待查找的区间缩小为一半，直到找到要查找的元素，或者区间被缩小为 0。

### 三个前提条件

* 目标函数的单调性（单调递增或递减）；
* 存在上下界（bounded）；
* 能够通过索引访问（index accessible）；

### 使用条件（应用场景的局限性）
* 1.二分查找依赖的是顺序表结构，即数组。
* 2.二分查找针对的是有序数据，因此只能用在插入、删除操作不频繁，一次排序多次查找的场景中。
* 3.数据量太小不适合二分查找，与直接遍历相比效率提升不明显。但有一个例外，就是数据之间的比较操作非常费时，比如数组中存储的都是长度超过300的字符串，那这是还是尽量减少比较操作使用二分查找吧。
* 4.数据量太大也不是适合用二分查找，因为数组需要连续的空间，若数据量太大，往往找不到存储如此大规模数据的连续内存空间。

### 二分查找模板

```javascript
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = (left + right) >> 1; // 相当于：Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}
```
