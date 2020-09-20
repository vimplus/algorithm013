
/**
 * <插入排序>
 * 方式：假设前面的数组已经是排好序了（先假设第一个有序），对于后面的未排序的元素，找到它应该插入前面有序数组应该所在的什么位置，插入到数组相应的位置，保持前半部分是有序的；
 * 核心思想：从前往后构建有序序列；对于未排序数据，在已排序的序列中从后向前扫描，找到相应位置并插入。
 * 
 * 时间复杂度：O(n^2)
 * @param {*} nums 
 */
function insertionSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let current = nums[i];
        let preIndex = i - 1;
        while (preIndex >= 0 && nums[preIndex] > current) {
            nums[preIndex + 1] = nums[preIndex];
            preIndex--;
        }
        nums[preIndex + 1] = current;
    }
    return nums;
}


var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr));