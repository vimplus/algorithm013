/**
 * 208. 实现 Trie (前缀树)
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/
 * 时间复杂度：假如每个字符串长度为 n，公共前缀为 m，每个API都是 O(m)，最坏情况下遍历每个节点的字符，为：O(n)。
 * 
 */
class TrieNode {
    constructor() {
        this.isEnd = false;
        this.next = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        if (!word) return false;

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.next[word[i]]) {
                node.next[word[i]] = new TrieNode();
            }
            node = node.next[word[i]];
        }
        node.isEnd = true;
        return true;
    }
    search(word) {
        if (!word) return false;

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.next[word[i]]) return false;

            node = node.next[word[i]];
        }
        return node.isEnd;
    }
    startsWith(prefix) {
        if (!prefix) return false;

        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!node.next[prefix[i]]) return false;
              
            node = node.next[prefix[i]];
        }
        return true;
    }
}