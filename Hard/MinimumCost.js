/*You are given a two-dimensional array arr of integers, 
where each element in the array represents the cost of traveling from that cell to its adjacent cells. 
You start at the top-left corner of the array arr[0][0] and you need to reach the bottom-right corner arr[m-1][n-1]. 
Your task is to find the minimum cost of traveling from the top-left corner to the bottom-right corner.

You can only move down or right from a cell. 
You can assume that the input array is non-empty and that there is at least one valid path
from the top-left corner to the bottom-right corner.*/

function minimumCost(arr) {
  const m = arr.length;
    const n = arr[0].length;
    
   
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    
     
    dp[0][0] = arr[0][0];
    
     
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + arr[0][j];
    }
    
 
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + arr[i][0];
    }
    
     
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + arr[i][j];
        }
    }
    
     
    return dp[m - 1][n - 1];
}
