/**
 * 时间复杂度分析：O(NlogK)
 */
// JS模拟二叉堆
class BinaryHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    insert(value) {
        this.insertAt(this.heap.length, value);
    }

    insertAt(index, value) {
        this.heap[index] = value;
        // 对比当前节点与其父节点，如果当前节点更小就交换它们
        while (index > 0 && this.compare(value, this.heap[Math.floor((index - 1) / 2)]) < 0) {
            this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
            this.heap[Math.floor((index - 1) / 2)] = value;
            index = Math.floor((index - 1) / 2);
        }
    }

    delete(index) {
        if (this.heap.length === 0) return;

        let value = this.heap[index];
        let i = index;
        // fix heap
        while (i < this.heap.length) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            // 没有左子节点
            if (left >= this.heap.length) break;
            // 没有右子节点
            if (right >= this.heap.length) {
                this.heap[i] = this.heap[left];
                i = left;
                break;
            }
            // 比较左右子节点的大小，更小的补到父节点
            if (this.compare(this.heap[left], this.heap[right]) < 0) {
                this.heap[i] = this.heap[left];
                i = left;
            } else {
                this.heap[i] = this.heap[right];
                i = right;
            }
        }
        // 查看最后的空位是不是最后的叶子节点
        if (i < this.heap.length - 1) {
            this.insertAt(i, this.heap.pop());
        } else {
            this.heap.pop();
        }
        return value;
    }
    top() {
        return this.heap[0];
    }
}

/**
 * 剑指 Offer 40. 最小的k个数
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (k === 0) return [];
    if (k > arr.length) return arr;

    const maxHeap = new BinaryHeap((a, b) => b - a);
    for (let i = 0; i < k; i++) {
        maxHeap.insert(arr[i])
    }

    for (let i = k; i < arr.length; i++) {
        if (maxHeap.top() > arr[i]) {
            maxHeap.delete(0);
            maxHeap.insert(arr[i]);
        }
    }
    return maxHeap.heap;
};