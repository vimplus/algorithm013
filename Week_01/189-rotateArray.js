/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1. 暴力解法
// var rotate = function(nums, k) {
//     let n = nums.length;
//     let temp, previous;
//     for (let i = 0; i < k; i++) {
//         previous = nums[n - 1];
//         for (let j = 0; j < n; j++) {
//             temp = nums[j];
//             nums[j] = previous;
//             previous = temp;
//         }
//     }
//     return nums;
// };


// 2. 使用反转
function rotate(nums, k) {
    let n = nums.length;
    k = k % n;

    // 第一次：反转整个数组 （0 ~ length-1）
    reverse(0, n - 1);
    console.log('nums-1:', nums);

    // 第二次：反转数组 0 ~ k-1 的范围
    reverse(0, k - 1);
    console.log('nums-2:', nums);

    // 第三次：反转数组 k ~ n-1 的范围
    reverse(k, n - 1);
    console.log('nums-3:', nums);

    function reverse(start, end) {
        let temp = 0;
        while (start < end) {
            temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    return nums;
}


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// nums-1: [ 7, 6, 5, 4, 3, 2, 1 ]
// nums-2: [ 5, 6, 7, 4, 3, 2, 1 ]
// nums-3: [ 5, 6, 7, 1, 2, 3, 4 ]
// [ 5, 6, 7, 1, 2, 3, 4 ]