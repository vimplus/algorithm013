/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s === t) return true;
    if (s.length !== t.length) return false;
    
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 0;
        }
        hash[s[i]]++;
        if (!hash[t[i]]) {
            hash[t[i]] = 0;
        }
        hash[t[i]]--;
    }
    for (const key in hash) {
        if (hash[key] !== 0) return false;
    }
    return true;
};