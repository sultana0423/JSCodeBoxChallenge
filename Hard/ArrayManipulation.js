/*You are given an array of n elements, initialized to 0. 
You are also given a list of m queries, where each query is represented by a triple (a, b, k) 
and denotes that you should add k to each element in the subarray arr[a...b].

Write a function arrayManipulation(n, queries) that returns the maximum value in the array after performing all the queries.*/

function arrayManipulation(n, queries) {
   let arr = new Array(n + 1).fill(0);

    
    for (let [a, b, k] of queries) {
        arr[a - 1] += k;
        if (b < n) {
            arr[b] -= k;
        }
    }

   
    let maxValue = 0;
    let currentValue = 0;
    for (let i = 0; i < n; i++) {
        currentValue += arr[i];
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }

    return maxValue;
}
