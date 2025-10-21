/**
 * Remove Elements Within K Distance
Given a non-decreasing array of integers and an integer K, remove in-place any element that is within K of the previous kept element and return the new length. Use constant extra space and single pass with two pointers.

Example

Input:

timestamps = [1, 2, 3, 8, 10]
K = 3
Output:

2
 */

function debounceTimestamps(timestamps, K) {
    // Write your code here
    let contador = 1;
    let lastKept = timestamps[0];
    if (timestamps.length===0) return 0;
    
    for (let i = 1; i<timestamps.length; i++){
        if(timestamps[i]-lastKept > K){
            contador++;
            lastKept=timestamps[i]
        }
    }
    return contador
}