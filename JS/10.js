/**
 * Count Number Pairs
Given a sorted array of positive integers and a target value, count the number of pairs (i, j) where i < j and array[i] + array[j] <= target.

Example

Input:

prices = [1, 2, 3, 4, 5]
budget = 7
Output:

8
 */

function countAffordablePairs(prices, budget) {
    // Write your code here
    let contador=0;
   
    for(let i = 0; i<prices.length; i++){
        for(let j = i+1; j<prices.length; j++){
            if(prices[i]+prices[j]<=budget){
                contador++;
            }
        }
    }
    return contador;
}