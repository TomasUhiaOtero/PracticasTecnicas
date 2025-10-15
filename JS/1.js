/*
Count Elements Greater Than Previous Average
Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

Example

Input

responseTimes = [100, 200, 150,300]
Output

2
Explanation

- Day 0: 100 (no previous days, skip) 
- Day 1: 200 > average(100) = 100 → count = 1 
- Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
- Day 3: 300 > average(100, 200, 150) = 150 → count = 2 Return 2.
 */

function countResponseTimeRegressions(responseTimes) {
  let count = 0;
  let runningSum = responseTimes[0];

  for (let i = 1; i < responseTimes.length; i++) {
    let avgPrev = runningSum / i;
    if (responseTimes[i] > avgPrev) {
      count++;
    }
    runningSum += responseTimes[i];
  }

  return count;
}