/*Given an array of integers arr and a target sum target, find all pairs of distinct integers that add up to the target sum. 
Return an array of arrays containing these pairs sorted in ascending order. If there are no such pairs, return an empty array.

Important: Your result array(s) must have the same sorting as the test cases.*/

function findPairs(arr, target) {
  let pairs = [];
    let seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        
        if (seen.has(complement)) {
            let pair = [arr[i], complement].sort((a, b) => a - b);
            pairs.push(pair);
        }
        
        seen.add(arr[i]);
    }
    
    pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    return pairs;
}
