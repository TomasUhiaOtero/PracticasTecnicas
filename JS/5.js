/**Target Index Search
Given a sorted array of distinct integers and a target value, return the index of the target or -1 if not found.

Example 1

Input:

nums = [1, 2, 3, 4, 5]
target = 3
Output:

2
Explanation:

Initialize low = 0, high = 4. Compute mid = (0 + 4) // 2 = 2. nums[2] = 3 matches target, so return 2. */

function binarySearch(nums, target) {
    // Write your code here
     for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i; // encontramos el target
    }
  }
  return -1; // no encontrado

}