/**
 * 时间复杂度分析：O(NK)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let arr = new Array(26).fill(0);

        for (let j = 0; j < str.length; j++) {
            arr[str.charCodeAt(j) - 97]++;
        }
        
        let hashKey = arr.join('');
        if (!hash[hashKey]) {
            hash[hashKey] = [str];
        } else {
            let temp = hash[hashKey];
            temp.push(str);
            hash[hashKey] = temp;
        }
    }
    return [...Object.values(hash)];
};