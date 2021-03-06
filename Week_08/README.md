# 学习笔记

## 位运算

### 为什么需要位运算？
因为机器里的数字表示方式和存储格式都是：二进制（计算机底层大部分都是高电位，低电位，用二进制表示更方便，性能高），而人类方便识别和计算的一般都是用十进制，所以不同进制之间就涉及到了转化方式，我们一般用**位运算**来处理这种进制转化。

#### 十进制 <=> 二进制

* 4(d): 0100    => 从右往左，分别第1位是2^0，第2位是2^1，第3位是2^2，以此类推；
* 8(d): 01000   
* 5(d): 0101
* 6(d): 0110

第一位(符号位)：0为正数，1为负数

##### 十进制转二进制
**一直往下继续除，直到商为0为止**。把每一个新的商数除以二，然后把余数写在被除数的右边。直到商数为0为止。

参考：[如何从十进制转换为二进制？](https://zh.wikihow.com/从十进制转换为二进制)

##### 二进制转十进制
将每一位为1代表的值进行累加起来就得到了十进制；

### 位运算符

| 含义      | 运算符 | 示例         |
| -------- | ----- | ------------ |
| 左移      |  <<   | 0011 => 0110 |
| 右移      |  >>   | 0110 => 0011 |
| 按位或    | \|  | 0011 \| 1011  => 1011|
| 按位与    |  &  | 0011 & 1011  => 0011 |
| 按位取反  |  ~   | ~0011 => 1100 |
| 按位异或（相同为0，不同为1） |  ^   | 0011 ^ 1011 => 1000 |

#### XOR - 异或

异或：相同为 0，不同为 1。也可用 “不进位加法 ”来理解。
异或操作的一些特点：

* x ^ 0 = x
* x ^ x = 0

* x ^ 1s = ~x   // 1s = ~0  1s: 全1
* x ^ (~x) = 1s

* c = a ^ b  =>  a ^ c = b, b ^ c = a       // 交换两个数
* a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c     // 联合

#### 指定位置的位运算
* 将 x 最右边的 n 位清零： x & (~0 << n);
* 获取 x 的第 n 位值(0 或者 1)：(x >> n) & 1;
* 获取 x 的第 n 位的幂值：x & (1 << n);
* 仅将第 n 位 置为1：x | (1 << n);
* 仅将第 n 位 置为0：x & (~(1 << n));
* 将 x 最高位至第 n 位(含) 清零：x & ((1 << n) - 1);

#### 实战位运算要点

* 判断奇偶：
    - x % 2 == 1 ---> (x & 1) == 1;  // 奇数
    - x % 2 == 0 ---> (x & 1) == 0;  // 偶数

* 除以2
    - x = x / 2 --->  x = x >> 1;
    - mid = (left + right) / 2 ---> mid = (left + right) >> 1;

* 清零最低位的1：x = x & (x - 1);
* 得到最低位的1：x & -x
* 0：x & ~x;

### 算数位移与逻辑位移

* 逻辑位移：在位移运算符（>>和<<）之前的数是无符号数，编译产生的汇编指令是逻辑位移。

* 算术位移：在位移运算符之前的数是有符号数，编译产生的汇编指令是算术位移。

* 左移：两种位移都在右边补0。
* 右移：逻辑位移在左边补0，算术位移在左边补符号位。


## 布隆过滤器（Bloom Filter）
有一个很长的二进制向量和一系列随机映射函数。
布隆过滤器可以用于检索一个元素是否在一个集合中（只用于查询是否存在）。

* 优点：是空间效率和查询时间都远远超过一般的算法，
* 缺点：是有一定的误识别率和删除困难。

当一个元素：
* 查询为不存在：一定不存在；
* 查询为存在: 可能存在。

主要用于最外层用做缓存场景。

### 案例场景

* 比特币网络（分布式系统）
* 分布式系统（Map-Reduce） — Hadoop、search engine
* Redis 缓存
* 垃圾邮件、评论等的过滤

## LRU Cache

* 两个要素：大小、替换策略
* Hash Table + Double LinkedList

代码：LRU-Cache.js

## 时间复杂度：
* 查询: O(1)
* 修改/更新: O(1) 

## 排序算法

### 比较类排序：
通过比较来决定元素间的相对次序，由于其时复杂度不能突破O(nlogn)，因此也称之为**非线性**比较类排序。

### 非比较类排序：
不通过比较来决定元素间的相对次序，它可以突破基于比较类排序的时间下限，以线性时间运行，因此也称之为**线性**时间非比较类排序。

### 排序分类

![排序分类](https://img2018.cnblogs.com/blog/849589/201903/849589-20190306165258970-1789860540.png)

### 算法复杂度

![算法复杂度](https://images2018.cnblogs.com/blog/849589/201804/849589-20180402133438219-1946132192.png)

### 初级排序 - O(n^2)

* 冒泡排序（Bubble Sort）
    > * 思路：嵌套循环，每次查看相邻的元素，如果逆序，则交换。
    >  比如升序：每次把大的数字往后面放，每经过一轮扫描后，最大的数字一定是在最后。
    > * 代码实现：bubbleSort.js

* 选择排序（Selection Sort）
    > * 思路：每次找最小值，然后放到待排序数组的起始位置。
    > * 代码实现：selectionSort.js

* 插入排序（Insertion Sort）
    > * 思路：从前往后构建有序序列；对于未排序数据，在已排序的序列中从后向前扫描，找到相应位置并插入。
    >   假设前面的数组已经是排好序了，对于后面的未排序的元素，找到它应该插入前面有序数组应该所在的什么位置，插入到数组相应的位置，保持前半部分是有序的。
    >
    > * 代码实现：insertionSort.js

### 高级排序 - O(nlogn)

* 快速排序（Qick Sort）
    > * 思路：数组取标杆 pivot，将小元素放到 pivot 左边，大元素放右侧，然后依次对左边和右边的子数组继续快排，以达到整个序列有序。
    >  比如升序：每次把大的数字往后面放，每经过一轮扫描后，最大的数字一定是在最后。
    > * 代码实现：quickSort.js

* 归并排序（Merge Sort）
    > * 思路：
    >     - 1.将长度为 n 的序列分成两个长度为 `n / 2` 的子序列；
    >     - 2.对这两个子序列分别采用归并排序；
    >     - 3.将两个排序好的子序列合并成一个最终的有序序列；
    > * 代码实现：mergeSort.js


* 堆排序（Heap Sort）- 堆的插入：O(logN)，取最大/最小值 O(1)
    > * 思路：
    >     - 1.数组元素一次建立小顶堆
    >     - 2.依次取堆顶元素，并删除。
    >
    > * 代码实现：heapSort.js

#### 小结

归并和快排具有相似性，但步骤顺序相反了：

> * 归并：先排序左右子数组，然后合并两个有序子数组；
> * 快排：先调配出左右子数组，然后对左右子数组进行排序；

### 特殊排序 - O(n+k)

* 计数排序（Counting Sort） 
    > 计数排序要求输入的数据必须是**有确定范围的整数**。
    > 思路：将输入的数据值转化为键存储在额外开辟的数组空间，然后依次把计数大于 1 的填充回原数组；

* 桶排序（Bucket Sort) 
    > 思路：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或以递归方式继续使用桶排序进行排序）。

* 基数排序（Radix Sort）
    > 思路：
    >   - 1.基数排序是按照低位先排序，然后收集；
    >   - 2.再按照高位先排序，然后再收集；以此类推，直到最高位。
    >   - 有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。

### 参考链接

* [十大经典排序算法](https://www.cnblogs.com/onepixel/p/7674659.html)
