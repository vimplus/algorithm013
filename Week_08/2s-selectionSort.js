
/**
 * <选择排序>
 * 方式：先假设第一个值最小，然后依次扫描与当前最小值比较，如果找到了更小的将其放到起始位置，以此类推，直到比较完整个数组；
 * 核心思想：每次找最小值，然后放到待排序数组的起始位置。
 * 
 * 时间复杂度：O(n^2)
 * @param {*} nums 
 */
function selectionSort(nums) {
    let n = nums.length;
    let minIndex = 0;
    for (let i = 0; i < n - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    return nums;
}


var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));