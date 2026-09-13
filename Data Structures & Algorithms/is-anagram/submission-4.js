// 동일한 문자를 포함하고 각 문자가 순서와 관계없이 동일한 횟수로 나타나는 경우 애너그램

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const count = new Array(26).fill(0);

    for (const str of s) {
      count[str.charCodeAt(0) - 97] += 1;
    }

    for (const str of t) {
      count[str.charCodeAt(0) - 97] -= 1;
    }

    return count.every((n) => n === 0);
  }
}
