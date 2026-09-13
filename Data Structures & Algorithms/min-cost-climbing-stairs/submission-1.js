class Solution {
  /**
   * @param {number[]} cost
   * @return {number}
   */
  minCostClimbingStairs(cost) {
    const n = cost.length;
    const memo = new Array(n).fill(null);

    const dfs = (i) => {
      if (i >= n) return 0;
      if (memo[i] !== null) return memo[i];

      memo[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
      return memo[i];
    };

    return Math.min(dfs(0), dfs(1));
  }
}
