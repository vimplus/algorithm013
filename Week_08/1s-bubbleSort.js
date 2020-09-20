
/**
 * <冒泡排序>
 * 方式：比较相邻的元素，如果第一个比第二个大，就交换它们两个，以此类推；
 * 核心思想：本质上是每次把大的数字往后面放，每经过一轮扫描后，最大的数字一定是在最后。
 * 
 * 时间复杂度：O(n^2)
 * @param {*} nums 
 */
function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr));