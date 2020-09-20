/**
 * 242. 有效的字母异位词
 * https://leetcode-cn.com/problems/valid-anagram/
 * 方法一：排序法
 * 时间复杂度：O(nlogn)
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    return s.split('').sort().join('') === t.split('').sort().join('');
};

/**
 * 方法二：哈希表法
 * 时间复杂度：O(n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let hash = {};

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) hash[s[i]] = 0;
        hash[s[i]]++;

        if (!hash[t[i]]) hash[t[i]] = 0;
        hash[t[i]]--;
    }

    for (const key in hash) {
        if (hash[key] !== 0) return false;
    }
    return true;
};