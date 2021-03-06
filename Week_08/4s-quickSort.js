/**
 * <快速排序>
 * 1、取一个中间值，
 * 2、遍历数组中的值与这个中间值比较，初始化left、right两个空数组，比中间值小的放左边，比中间值大的放右边；
 * 3、递归调用每一个被筛选出来的小数组；
 * @param {*} array 
 */
function quickSort(array) {
    if (array.length <= 1) return array;

    var pivotIndex = Math.floor(array.length / 2);
    var pivot = array.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    var sortLeft = quickSort(left);
    var sortRight = quickSort(right);
    var sortArray = sortLeft.concat([pivot], sortRight);
    return sortArray;
}