/**Check Palindrome by Filtering Non-Letters
Given a string containing letters, digits, and symbols, determine if it reads the same forwards and backwards when considering only alphabetic characters (case-insensitive).

Example

Input

code = A1b2B!a
Output

1
Explanation

- Step 1: Extract only letters → ['A','b','B','a'] 
- Step 2: Convert to lowercase → ['a','b','b','a'] 
- Step 3: Compare sequence forward and backward: 'abba' == 'abba' → */

function isAlphabeticPalindrome(code) {
    // Write your code here
     const limpio = String(code).toLowerCase().replace(/[^a-z]/g, '');
  const reversed = limpio.split('').reverse().join('');
  return limpio === reversed ? 1 : 0;
}