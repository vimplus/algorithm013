/**
 * 917. 仅仅反转字母
 * https://leetcode-cn.com/problems/reverse-only-letters/
 * 时间复杂度：O(n)
 * 
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let stackLettes = [];

    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            stackLettes.push(s[i]);
        }
    }

    let strArr = [];
    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            strArr.push(stackLettes.pop());
        } else {
            strArr.push(s[i]);
        }
    }
    return strArr.join('');
};

function isLetter(s) {
    if (/[a-zA-Z]/.test(s)) return true;
    return false;
}